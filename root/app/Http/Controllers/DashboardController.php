<?php

namespace App\Http\Controllers;

use App\Models\FeedBack;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $services = Service::query()->orderBy('price', 'desc')->get();

        return Inertia::render('Dashboard', [
            'services' => $services,
        ]);
    }
}
