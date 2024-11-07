<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\FeedBack;
use App\Models\Order;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Pest\Laravel\get;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $services = Service::query()->orderBy('price', 'desc')->get();
        $ourMission = About::select('ourMission')->first();

        $currentOrderSession = session('currentOrder') ?? null;
        $order = Order::query();
        if (isset($currentOrderSession)) {
            $order = $order->where('id', '=', $currentOrderSession->id)->first();
        }

        if (isset($currentOrderSession) && $order->status === 'completed') {
            session()->forget('currentOrder');
        }

        return Inertia::render('Dashboard', [
            'services' => $services,
            'ourMission' => $ourMission,
            'currentOrder' => $currentOrderSession
        ]);
    }
}
