<?php

namespace App\Http\Controllers\order;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\TowTruck;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Termwind\Components\Dd;

class OrderController extends Controller
{
    public function store(Request $request)
    {
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

        return inertia('CheckOut/Checkout', [
            'order' => $order,
        ]);
    }

    public function currentOrder(Order $order)
    {
        $sessionCurrentOrder = session('currentOrder');

        if ($sessionCurrentOrder->id === $order->id && $sessionCurrentOrder->user_id === $order->user_id && $sessionCurrentOrder->tow_truck_id === $order->tow_truck_id) {
            return inertia('Order/CurrentOrder', [
                'currentOrder' => new OrderResource($order)
            ]);
        } else {
            return to_route('dashboard');
        }
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
