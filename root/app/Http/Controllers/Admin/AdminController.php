<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\TowTruck;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $usersCount = User::query()->where('status', '!=', 'admin')->latest()->count();
        $vehiclesCount = Vehicle::query()->latest()->count();
        $evacuatorsCount = TowTruck::query()->latest()->count();
        $ordersCount = Order::query()->latest()->count();

        $users = User::query()->select(['name', 'id', 'phone_number', 'status'])->where('status', '!=', 'admin')->latest()->paginate(5);
        $vehicles = Vehicle::query()->with('user')->select(['id', 'make', 'model', 'user_id'])->latest()->paginate(5);
        $evacuators = TowTruck::query()->select(['availability_status', 'location', 'driver_name', 'id'])->latest()->paginate(5);
        $orders = Order::query()->with('user')->select(['price', 'status', 'user_id'])->latest()->paginate(5);

        return inertia('Admin/Index', compact('usersCount', 'vehiclesCount', 'evacuatorsCount', 'ordersCount', 'users', 'vehicles', 'evacuators', 'orders'));
    }

    //users
    public function getUsers()
    {
        $users = User::query()->where('status', '!=', 'admin')->latest()->paginate(10);

        return inertia('Admin/Users/IndexUsers', [
            'users' => $users
        ]);
    }

    public function showUser(User $user)
    {
        return inertia('Admin/Users/ShowUser', [
            'user' => $user
        ]);
    }

    public function editUser(User $user)
    {
        return inertia('Admin/Users/EditUser', compact('user'));
    }

    public function updateUser(Request $request, User $user)
    {
        $validatedData = $request->validate([
            'name' => 'nullable|string|min:2',
            'email' => 'nullable|email|min:2',
            'phone_number' => 'nullable|string|min:9',
            'role' => 'nullable|string',
            'status' => 'nullable|string',
            'location' => 'nullable|string'
        ]);

        $user->update($validatedData);
        return to_route('admin.users.edit', $user->id);
    }

    public function deleteUser(User $user)
    {
        $user->delete();
        return to_route('admin.dashboard');
    }

    public function getOrders()
    {
        $orders = Order::query()->latest()->paginate(10);
        return inertia('Admin/Orders/IndexOrders', [
            'orders' => $orders
        ]);
    }

    public function showOrder(Order $order)
    {
        return inertia('Admin/Orders/ShowOrder', compact('order'));
    }

    public function editOrder(Order $order)
    {
        $createdBy = $order->user;
        $vehicle = $order->vehicle;
        $towTruck = $order->tow_truck;

        return inertia('Admin/Orders/EditOrder', [
            'order' => $order,
            'vehicle' => $vehicle,
            'user' => $createdBy,
            'evacuator' => $towTruck
        ]);
    }

    public function updateOrder(Request $request, Order $order)
    {
        $validatedData = $request->validate([
            'pickup_location' => 'nullable|string|min:2',
            'dropoff_location' => 'nullable|string|min:2',
            'order_details' => 'nullable|string|min:6',
            'order_date' => 'nullable|date',
            'completion_date' => 'nullable|date',
            'price' => 'nullable',
            'status' => 'nullable|string'
        ]);

        $order->update($validatedData);
        return to_route('admin.orders.edit', $order->id);
    }

    public function deleteOrder(Order $order)
    {
        $order->delete();
        return to_route('admin.orders');
    }

    //vehicles
    public function getVehicles()
    {
        $vehicles = Vehicle::query()->with('user')->latest()->paginate(10);

        return inertia('Admin/Vehicles/IndexVehicles', [
            'vehicles' => $vehicles
        ]);
    }

    public function editVehicle(Vehicle $vehicle)
    {
        return inertia('Admin/Vehicles/EditVehicle', compact('vehicle'));
    }

    public function updateVehicle(Request $request, Vehicle $vehicle)
    {
        $validatedData = $request->validate([
            'make' => 'nullable|string|min:2',
            'model' => 'nullable|string|min:2',
            'year' => 'nullable',
            'kg' => 'nullable',
            'license_plate' => 'nullable',
            'color' => 'nullable'
        ]);

        $vehicle->update($validatedData);
        return to_route('admin.vehicles.edit', $vehicle->id);
    }

    public function showVehicle(Vehicle $vehicle)
    {
        return inertia('Admin/Vehicles/ShowVehicle', compact('vehicle'));
    }

    public function deleteVehicle(Vehicle $vehicle)
    {
        $vehicle->delete();
        return to_route('admin.vehicles');
    }

    //evacuators
    public function getEvacuators()
    {
        $evacuators = TowTruck::query()->latest()->paginate(10);
        return inertia('Admin/Evacuators/IndexEvacuators', [
            'evacuators' => $evacuators
        ]);
    }

    public function editEvacuator(TowTruck $evacuator)
    {
        return inertia('Admin/Evacuators/EditEvacuator', compact('evacuator'));
    }

    public function updateEvacuator(Request $request, TowTruck $evacuator)
    {
        $validatedData = $request->validate([
            'driver_name' => 'nullable|string|min:2',
            'truck_number' => 'nullable|string|min:2',
            'availability_status' => 'nullable|string',
            'location' => 'nullable|string'
        ]);

        $evacuator->update($validatedData);
        return to_route('admin.evacuator.edit', $evacuator->id);
    }
}
