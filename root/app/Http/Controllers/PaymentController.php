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
            'tow_truck_id' => 'nullable',
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

        $orderDetails = [
            'pickup_location' => $validatedData['pickup_location'],
            'dropoff_location' => $validatedData['dropoff_location'],
            'order_details' => $validatedData['order_details'] ?? '',
            'order_date' => now(),
            'completion_date' => now(),
            'price' => $this->calculatePrice($validatedData['type']),
            'status' => 'pending',
            'user_id' => Auth::user()->id,
            'vehicle_id' => $vehicle->id,
        ];

        $orderDetails['tow_truck_id'] = $validatedData['tow_truck_id'] ?? TowTruck::where('location', $validatedData['pickup_location'])->first()->id ?? null;

        $activeOrder = Order::where('user_id', $orderDetails['user_id'])
            ->where('tow_truck_id', $orderDetails['tow_truck_id'])
            ->whereIn('status', ['pending', 'In Progress'])
            ->first();

        if (!isset($activeOrder)) {
            $order = Order::create($orderDetails);
            session(['currentOrder' => $order]);
        } else {
            if (!isset($activeOrder)) {
                $order = Order::create($orderDetails);
            } else {
                throw ValidationException::withMessages([
                    'error' => 'თქვენი შეკვეთა არ დასრულებულა'
                ]);
            }
        }

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
        $evacuator_id = $order->tow_truck->id;
        $order->update(['status' => 'In Progress', 'payed' => 1]);
        return inertia('CheckOut/Success', ['order' => $order, 'evacuator_id' => $evacuator_id]);
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
