<?php

use App\Http\Controllers\About\AboutController;
use App\Http\Controllers\Contact\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\order\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Questions\QuestionController;
use App\Http\Controllers\Service\ServiceController;
use Illuminate\Support\Facades\Route;

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

//შეკითხვის დასმა
Route::post('/question', [QuestionController::class, 'send'])->middleware('auth')->name('question.send');

//შეკვეთა
Route::post('/order', [OrderController::class, 'store'])->middleware('auth')->name('order');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::post('/create-payment-intent/{order}', [PaymentController::class, 'createPaymentIntent'])->name('payment.try');

Route::get('/payment/success', [PaymentController::class, 'success'])->name('payment.success');
Route::get('/payment/cancel', [PaymentController::class, 'cancel'])->name('payment.cancel');
Route::get('/payment/form/{order}', [PaymentController::class, 'showForm'])->name('payment.form');

require __DIR__ . '/admin.php';
require __DIR__ . '/auth.php';
