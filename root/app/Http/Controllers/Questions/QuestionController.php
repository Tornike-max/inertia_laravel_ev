<?php

namespace App\Http\Controllers\Questions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function send(Request $request)
    {
        $validatedData = $request->validate([
            'question' => 'required|min:5'
        ]);
        return to_route('services.index');
    }
}
