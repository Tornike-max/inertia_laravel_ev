<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\TowTruck;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\Checkout\Session;

class PaymentController extends Controller
{
    public function createCheckoutSession(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $validatedData = $request->validate([
            'pickup_location' => 'required|string|min:2',
            'dropoff_location' => 'required|string|min:2',
            'model' => 'required|string',
            'order_details' => 'nullable|string',
            'make' => 'required|string',
            'type' => 'required|string',
            'year' => 'required|string',
            'kg' => 'required|string',
            'color' => 'nullable|string',
            'license_plate' => 'required|string|unique:vehicles,license_plate,NULL,id,user_id,' . Auth::user()->id,
        ]);

        $vehicleDetails = [
            'user_id' => Auth::user()->id,
            'model' => $validatedData['model'],
            'make' => $validatedData['make'],
            'year' => $validatedData['year'],
            'kg' => $validatedData['kg'],
            'color' => $validatedData['color'] ?? '',
            'license_plate' => $validatedData['license_plate'],
        ];

        $vehicle = Vehicle::create($vehicleDetails);

        if (!$vehicle) {
            throw ValidationException::withMessages(['error' => 'Unable to create vehicle record']);
        }

        $towTrucks = TowTruck::where('location', $validatedData['pickup_location'])->first();

        if (!$towTrucks) {
            return back()->withErrors(['error' => 'No available tow truck at the specified address']);
        }

        $orderDetails = [
            'pickup_location' => $validatedData['pickup_location'],
            'dropoff_location' => $validatedData['dropoff_location'],
            'order_details' => $validatedData['order_details'] ?? '',
            'order_date' => now(),
            'completion_date' => now(),
            'price' => $this->calculatePrice($validatedData['type']),
            'status' => 'pending',
            'user_id' => Auth::user()->id,
            'tow_truck_id' => $towTrucks->id,
            'vehicle_id' => $vehicle->id,
        ];

        $order = Order::create($orderDetails);

        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'gel',
                    'product_data' => [
                        'name' => 'Tow Truck Service',
                    ],
                    'unit_amount' => $order->price * 100,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('payment.success', ['order' => $order->id]),
            'cancel_url' => route('payment.cancel', ['order' => $order->id]),
        ]);
        return Inertia::location($session->url);
    }

    public function success(Order $order)
    {
        $order->update(['status' => 'completed', 'payed' => 1]);
        return inertia('CheckOut/Success', ['order' => $order]);
    }

    public function cancel(Order $order)
    {
        $order->update(['status' => 'cancelled', 'payed' => 0]);
        return inertia('CheckOut/Cancel', ['order' => $order]);
    }

    private function calculatePrice($vehicleType)
    {
        switch ($vehicleType) {
            case 'მანქანის ევაკუატორი':
                return 60;
                break;

            case 'მოტოციკლის ევაკუატორი':
                return 40;
                break;

            case 'მძიმე ტექნიკის ევაკუატორი':
                return 70;
                break;

            default:
                return 60;
                break;
        }
    }
}
