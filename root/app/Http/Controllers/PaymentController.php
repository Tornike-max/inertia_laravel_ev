<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\PaymentIntent;
use Stripe\Stripe;

class PaymentController extends Controller
{

    public function createForm()
    {
        return inertia('CheckOut/CheckoutForm');
    }
    public function create(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET')); // Stripe-ის საიდუმლო API გასაღები

        // PaymentIntent-ის შექმნა
        $paymentIntent = PaymentIntent::create([
            'amount' => 1000, // თანხა ლარებში (10.00 ლარი)
            'currency' => 'gel', // ვალუტა
        ]);

        return response()->json(['clientSecret' => $paymentIntent->client_secret]);
    }

    public function success(Request $request)
    {
        // ვალიდაციის წარმოება
        $validator = Validator::make($request->all(), [
            'paymentIntentId' => 'required|string',
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // აქ შეგიძლიათ შეინახოთ გადახდის ინფორმაცია
        // მაგალითად, გამოიყენეთ Payment Model
        // Payment::create([...]);

        return response()->json(['message' => 'Payment succeeded!']);
    }
}
