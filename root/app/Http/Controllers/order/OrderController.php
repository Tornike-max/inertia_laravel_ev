<?php

namespace App\Http\Controllers\order;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\TowTruck;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

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
            'license_plate' => $validatedData['license_plate']
        ];

        $vehicle = Vehicle::create($vehicleDetails);

        if (!$vehicle) {
            throw ValidationException::withMessages(['error' => 'Unable to create vehicle record']);
        }

        $towTrucks = TowTruck::query()->where('location', '=', $validatedData['pickup_location'])->first();

        if (!$towTrucks) {
            return back()->withErrors(['error' => 'სამწუხაროდ, არცერთი ევაკუატორი არ არის ხელმისაწვდომი მითითებულ მისამართზე']);
        }

        $orderDetails = [
            'pickup_location' => $validatedData['pickup_location'],
            'dropoff_location' => $validatedData['dropoff_location'],
            'order_details' => $validatedData['order_details'] ?? '',
            'order_date' => now(),
            'completion_date' => now(),
            'price' => $this->calculatePrice($vehicleDetails, $towTrucks),
            'status' => 'pending',
            'user_id' => Auth::user()->id,
            'tow_truck_id' => $towTrucks->id,
            'vehicle_id' => $vehicle->id
        ];

        $order = Order::create($orderDetails);


        if (isset($order)) {
            return inertia(route('dashboard'), [
                'status' => '200 ok',
                'message' => 'Order Created Successfully',
                'data' => $order
            ]);
        };

        abort(500);
    }

    private function calculatePrice($vehicleDetails, $towTruck)
    {
        return 150;
    }
}
