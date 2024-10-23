<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class PaymentController extends Controller
{
    public function show(Order $order)
    {
        return inertia('Checkout', [
            'order' => $order,
        ]);
    }
    public function createPaymentIntent(Request $request, Order $order)
    {
        $validatedData = $request->validate([
            'amount' => 'required|numeric|min:1',
            'email' => 'required|email',
        ]);

        Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $validatedData['amount'] * 100,
                'currency' => 'usd',
                'payment_method_types' => ['card'],
                'receipt_email' => $validatedData['email'],
            ]);

            return response()->json([
                'clientSecret' => $paymentIntent->client_secret,
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
