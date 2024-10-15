<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::query()->orderBy('price', 'desc')->get();
        $questions = Question::query()->get()->groupBy('category');

        return Inertia::render('Service/Index', [
            'services' => $services,
            'questions' => $questions
        ]);
    }
}
