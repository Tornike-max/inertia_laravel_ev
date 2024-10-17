<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $users = User::query()->where('status', '!=', 'admin')->latest()->paginate(10);

        return inertia('Admin/Index', [
            'users' => $users
        ]);
    }

    //users

    public function showUser(User $user)
    {
        return inertia('Admin/Users/ShowUser', [
            'user' => $user
        ]);
    }
}
