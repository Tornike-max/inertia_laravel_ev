<?php

use App\Http\Controllers\About\AboutController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Contact\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\order\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Service\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/services', [ServiceController::class, 'index'])
    ->middleware(['auth'])
    ->name('services.index');
Route::get('/about', [AboutController::class, 'index'])
    ->middleware(['auth'])
    ->name('about.index');

Route::get('/contact', [ContactController::class, 'index'])
    ->middleware(['auth'])
    ->name('contact.index');

//შეკვეთა
Route::post('/order', [OrderController::class, 'store'])->middleware('auth')->name('order');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/admin', [AdminController::class, 'dashboard'])->middleware(['auth'])->name('admin.dashboard');

require __DIR__ . '/auth.php';
