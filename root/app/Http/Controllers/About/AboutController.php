<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $currentOrderSession = session('currentOrder') ?? null;

        if (isset($currentOrderSession) && $currentOrderSession->status === 'completed') {
            session()->forget('currentOrder');
        }
        $about = About::query()->first();

        return inertia('About/Index', [
            'about' => $about,
            'currentOrder' => $currentOrderSession
        ]);
    }
}
