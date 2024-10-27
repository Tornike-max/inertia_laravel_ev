<?php

namespace App\Http\Controllers\TowTruck;

use App\Http\Controllers\Controller;
use App\Models\TowTruck;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class TowTruckController extends Controller
{
    public function index()
    {
        $evacuators = TowTruck::query()->with('user')->latest()->paginate(10);

        return inertia('TowTruck/Index', [
            'evacuators' => $evacuators
        ]);
    }

    public function show(TowTruck $towTruck)
    {
        return inertia('TowTruck/Show', [
            'evacuator' => $towTruck,
            'evacuator_owner' => $towTruck->user
        ]);
    }
    public function create()
    {
        return inertia('TowTruck/Create');
    }

    public function store(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $validatedData = $request->validate([
            'hasDriver' => 'required|string',
            'driver_name' => 'nullable|string|min:2',
            'truck_number' => 'required|string|min:9,max:9',
            'availability_status' => 'nullable|string',
            'location' => 'required|string:2'
        ]);

        if ($validatedData['hasDriver'] === 'no') {
            $validatedData['driver_name'] = Auth::user()->name;
        }

        $validatedData['user_id'] = Auth::user()->id;
        $validatedData['availability_status'] = 'დაკავებული';

        $truck = TowTruck::create($validatedData);

        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'gel',
                    'product_data' => [
                        'name' => 'Tow Truck Service Fee',
                    ],
                    'unit_amount' => 2 * 100,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('payment.towTruck.success', ['towTruck' => $truck->id]),
            'cancel_url' => route('payment.towTruck.cancel', ['towTruck' => $truck->id]),
        ]);

        return Inertia::location($session->url);
    }


    public function success(TowTruck $towTruck)
    {
        $towTruck->update([
            'availability_status' => 'ხელმისაწვდომი'
        ]);
        return inertia('CheckOut/Success', ['towTruck' => $towTruck]);
    }

    public function error(TowTruck $towTruck)
    {
        $towTruck->update([
            'availability_status' => 'დაკავებული'
        ]);
        return inertia('CheckOut/Success', ['towTruck' => $towTruck]);
    }
}
