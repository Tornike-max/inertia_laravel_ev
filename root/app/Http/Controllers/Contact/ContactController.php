<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactUs;

class ContactController extends Controller
{
    public function index()
    {
        $currentOrderSession = session('currentOrder') ?? null;

        if (isset($currentOrderSession) && $currentOrderSession->status === 'completed') {
            session()->forget('currentOrder');
        }
        return inertia('Contact/Index', [
            'currentOrder' => $currentOrderSession
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|min:2',
            'email' => 'required|email',
            'message' => 'required|string|min:6'
        ]);

        Mail::to('ozbetelashvilitoko@gmail.com')->send(new ContactUs($validatedData));

        return to_route('contact.index');
    }
}
