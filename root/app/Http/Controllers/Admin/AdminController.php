<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $users = User::query()->latest()->paginate(10);

        return inertia('Admin/Index', [
            'users' => $users
        ]);
    }
}
