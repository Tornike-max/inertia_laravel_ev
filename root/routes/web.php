<?php

use App\Http\Controllers\About\AboutController;
use App\Http\Controllers\Contact\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\order\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Questions\QuestionController;
use App\Http\Controllers\Service\ServiceController;
use App\Http\Controllers\TowTruck\TowTruckController;
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
Route::post('/contact', [ContactController::class, 'store'])->name('contact.send');

//შეკითხვის დასმა
Route::post('/question', [QuestionController::class, 'send'])->middleware('auth')->name('question.send');

//შეკვეთა
Route::post('/order', [OrderController::class, 'store'])->middleware('auth')->name('order');
Route::get('/order/current/{order}', [OrderController::class, 'currentOrder'])->middleware('auth')->name('order.current');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//ევაკუატორის შექმნა
Route::get('/evacuator/index', [TowTruckController::class, 'index'])->name('evacuator.index');
Route::get('/evacuator/show/{towTruck}', [TowTruckController::class, 'show'])->name('evacuator.show');
Route::post('/evacuator/show/comment{towTruck}', [TowTruckController::class, 'comment'])->name('evacuator.comment');
Route::get('/evacuator/edit/comment{comment}', [TowTruckController::class, 'editComment'])->name('evacuator.comment.edit');
Route::put('/evacuator/update/comment{comment}', [TowTruckController::class, 'updateComment'])->name('evacuator.comment.update');
Route::delete('/evacuator/delete/comment{comment}', [TowTruckController::class, 'deleteComment'])->name('evacuator.comment.delete');

Route::get('/evacuator/create', [TowTruckController::class, 'create'])->name('evacuator.create');
Route::post('/evacuator/store', [TowTruckController::class, 'store'])->name('evacuator.store');
Route::get('/evacuator/orderForm/{evacuator}', [TowTruckController::class, 'orderForm'])->name('evacuator.orderform');
Route::post('/evacuator/order/{evacuator}', [TowTruckController::class, 'order'])->name('evacuator.order');

Route::get('/towTruck-success/{towTruck}', [TowTruckController::class, 'success'])->name('payment.towTruck.success');
Route::get('/towTruck-cancel/{towTruck}', [TowTruckController::class, 'cancel'])->name('payment.towTruck.cancel');

Route::get('/tow-Truck/{towTruck}/location', [TowTruckController::class, 'currentLocation'])->middleware('auth')->name('towTruck.current.location');
Route::put('/tow-trucks/{towTruck}/location', [TowTruckController::class, 'updateLocation'])->middleware('auth')->name('towTruck.update.location');

Route::post('/create-checkout-session', [PaymentController::class, 'createCheckoutSession'])->name('payment.checkout');
Route::get('/payment-success/{order}', [PaymentController::class, 'success'])->name('payment.success');
Route::get('/payment-cancel/{order}', [PaymentController::class, 'cancel'])->name('payment.cancel');




require __DIR__ . '/admin.php';
require __DIR__ . '/auth.php';
