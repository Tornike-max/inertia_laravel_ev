<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class PaymentController extends Controller
{
    public function createPaymentIntent(Request $request, Order $order)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'name' => 'required|string|min:2'
        ]);

        Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $request->amount * 100,
                'currency' => 'usd',
                'payment_method_types' => ['card'],
            ]);

            $order->update(['payed' => 1]);

            return inertia('CheckOut/Success');
        } catch (\Exception $e) {
            return inertia('CheckOut/Cancel');
        }
    }
    public function success()
    {
        return inertia('CheckOut/Success');
    }

    public function cancel()
    {
        return inertia('CheckOut/Cancel');
    }

    public function showForm(Order $order)
    {
        return inertia('CheckOut/Checkout', compact('order'));
    }
}
