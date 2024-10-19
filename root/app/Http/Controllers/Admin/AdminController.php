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

    //cars
    public function getVehicles()
    {
        $vehicles = Vehicle::query()->latest()->paginate(10);
        return inertia('Admin/Vehicles/IndexVehicles', [
            'vehicles' => $vehicles
        ]);
    }

    //evacuators
    public function getEvacuators()
    {
        $evacuators = Vehicle::query()->latest()->paginate(10);
        return inertia('Admin/Evacuators/IndexEvacuators', [
            'evacuators' => $evacuators
        ]);
    }

    public function getOrders()
    {
        $orders = Order::query()->latest()->paginate(10);
        return inertia('Admin/Orders/IndexOrders', [
            'orders' => $orders
        ]);
    }
}
