<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Order;
use App\Models\TowTruck;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{
    public function dashboard()
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $usersCount = User::query()->where('status', '!=', 'admin')->latest()->count();
        $vehiclesCount = Vehicle::query()->latest()->count();
        $evacuatorsCount = TowTruck::query()->latest()->count();
        $ordersCount = Order::query()->latest()->count();

        $users = User::query()->select(['name', 'email', 'id', 'phone_number', 'status'])->where('status', '!=', 'admin')->latest()->paginate(5);
        $vehicles = Vehicle::query()->with('user')->select(['id', 'make', 'model', 'user_id'])->latest()->paginate(5);
        $evacuators = TowTruck::query()->latest()->paginate(5);
        $orders = Order::query()->with('user')->select(['price', 'status', 'user_id'])->latest()->paginate(5);
        $comments = Comment::query()->with(['author', 'towTruck'])->latest()->paginate(5);

        return inertia('Admin/Index', compact('usersCount', 'vehiclesCount', 'evacuatorsCount', 'ordersCount', 'users', 'vehicles', 'evacuators', 'orders', 'comments'));
    }

    //users
    public function getUsers()
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $users = User::query()->where('status', '!=', 'admin')->latest()->paginate(10);

        return inertia('Admin/Users/IndexUsers', [
            'users' => $users
        ]);
    }

    public function showUser(User $user)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        return inertia('Admin/Users/ShowUser', [
            'user' => $user
        ]);
    }

    public function editUser(User $user)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        return inertia('Admin/Users/EditUser', compact('user'));
    }

    public function updateUser(Request $request, User $user)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
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
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $user->delete();
        return to_route('admin.dashboard');
    }

    public function getOrders()
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $orders = Order::query()->latest()->paginate(10);
        return inertia('Admin/Orders/IndexOrders', [
            'orders' => $orders
        ]);
    }

    public function showOrder(Order $order)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        return inertia('Admin/Orders/ShowOrder', compact('order'));
    }

    public function editOrder(Order $order)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
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
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
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
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $order->delete();
        return to_route('admin.orders');
    }

    //vehicles
    public function getVehicles()
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $vehicles = Vehicle::query()->with('user')->latest()->paginate(10);

        return inertia('Admin/Vehicles/IndexVehicles', [
            'vehicles' => $vehicles
        ]);
    }

    public function editVehicle(Vehicle $vehicle)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        return inertia('Admin/Vehicles/EditVehicle', compact('vehicle'));
    }

    public function updateVehicle(Request $request, Vehicle $vehicle)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
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
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        return inertia('Admin/Vehicles/ShowVehicle', compact('vehicle'));
    }

    public function deleteVehicle(Vehicle $vehicle)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $vehicle->delete();
        return to_route('admin.vehicles');
    }

    //evacuators
    public function getEvacuators()
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $evacuators = TowTruck::query()->latest()->paginate(10);
        return inertia('Admin/Evacuators/IndexEvacuators', [
            'evacuators' => $evacuators
        ]);
    }

    public function editEvacuator(TowTruck $evacuator)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        return inertia('Admin/Evacuators/EditEvacuator', compact('evacuator'));
    }

    public function updateEvacuator(Request $request, TowTruck $evacuator)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $validatedData = $request->validate([
            'driver_name' => 'nullable|string|min:2',
            'truck_number' => 'nullable|string|min:2',
            'availability_status' => 'nullable|string',
            'location' => 'nullable|string'
        ]);

        $evacuator->update($validatedData);
        return to_route('admin.evacuator.edit', $evacuator->id);
    }

    public function showEvacuator(TowTruck $evacuator)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        return inertia('Admin/Evacuators/ShowEvacuator', compact('evacuator'));
    }

    public function deleteEvacuator(TowTruck $evacuator)
    {
        if (!Gate::allows('is-admin')) {
            abort(401);
        }
        $evacuator->delete();
        return to_route('admin.dashboard', $evacuator->id);
    }

    public function editComment(Comment $comment)
    {
        return inertia('Admin/Comments/Edit', compact('comment'));
    }

    public function updateComment(Request $request, Comment $comment)
    {
        $validatedData = $request->validate([
            'content' => 'required|string'
        ]);
        $comment->update($validatedData);
        return to_route('admin.dashboard');
    }

    public function deleteComment(Comment $comment)
    {
        $comment->delete();
        return to_route('admin.dashboard');
    }
}
