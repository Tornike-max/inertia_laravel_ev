<?php

namespace App\Http\Controllers\Questions;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class QuestionController extends Controller
{
    public function send(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'question' => 'required|min:5',
                'category' => 'required'
            ]);

            $validatedData['user_id'] = Auth::user()->id;

            Question::create($validatedData);

            return to_route('services.index');
        } catch (\Throwable $th) {
            throw ValidationException::withMessages(['question' => 'შეკითხვის ველი სავალდებულოა', 'category' => 'კატეგორიის მითითება აუცილებელია']);
        }
    }
}
