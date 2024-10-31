<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

//users
Route::get('/admin', [AdminController::class, 'dashboard'])->middleware(['auth'])->name('admin.dashboard');
Route::get('/admin/users', [AdminController::class, 'getUsers'])->middleware('auth')->name('admin.users');
Route::get('/admin/user/{user}/edit', [AdminController::class, 'editUser'])->middleware(['auth'])->name('admin.users.edit');
Route::put('/admin/user/update/{user}', [AdminController::class, 'updateUser'])->middleware(['auth'])->name('admin.users.update');
Route::delete('/admin/user/delete/{user}', [AdminController::class, 'deleteUser'])->middleware(['auth'])->name('admin.users.delete');
Route::get('/admin/user/{user}', [AdminController::class, 'showUser'])->middleware(['auth'])->name('admin.user');

//orders
Route::get('/admin/orders', [AdminController::class, 'getOrders'])->middleware('auth')->name('admin.orders');
Route::get('/admin/orders/{order}/edit', [AdminController::class, 'editOrder'])->middleware('auth')->name('admin.orders.edit');
Route::put('/admin/orders/update/{order}', [AdminController::class, 'updateOrder'])->middleware('auth')->name('admin.orders.update');
Route::get('/admin/order/{order}', [AdminController::class, 'showOrder'])->middleware(['auth'])->name('admin.order.show');
Route::delete('/admin/order/delete/{order}', [AdminController::class, 'deleteOrder'])->middleware(['auth'])->name('admin.order.delete');

//vehicles
Route::get('/admin/vehicles', [AdminController::class, 'getVehicles'])->middleware('auth')->name('admin.vehicles');
Route::get('/admin/vehicles/{vehicle}/edit', [AdminController::class, 'editVehicle'])->middleware('auth')->name('admin.vehicles.edit');
Route::put('/admin/vehicles/update/{vehicle}', [AdminController::class, 'updateVehicle'])->middleware('auth')->name('admin.vehicles.update');
Route::get('/admin/vehicle/{vehicle}', [AdminController::class, 'showVehicle'])->middleware(['auth'])->name('admin.vehicle.show');
Route::delete('/admin/vehicle/delete/{vehicle}', [AdminController::class, 'deleteVehicle'])->middleware(['auth'])->name('admin.vehicle.delete');

//evacuators
Route::get('/admin/ecavuators', [AdminController::class, 'getEvacuators'])->middleware('auth')->name('admin.evacuators');
Route::get('/admin/evacuators/{evacuator}/edit', [AdminController::class, 'editEvacuator'])->middleware('auth')->name('admin.evacuator.edit');
Route::put('/admin/evacuators/update/{evacuator}', [AdminController::class, 'updateEvacuator'])->middleware('auth')->name('admin.evacuator.update');
Route::get('/admin/evacuator/{evacuator}', [AdminController::class, 'showEvacuator'])->middleware(['auth'])->name('admin.evacuator.show');
Route::delete('/admin/evacuator/delete/{vehicle}', [AdminController::class, 'deleteEvacuator'])->middleware(['auth'])->name('admin.evacuator.delete');

//comments
Route::get('/admin/edit-comment/{comment}', [AdminController::class, 'editComment'])->middleware('auth')->name('admin.edit.comment');
Route::put('/admin/update-comment/{comment}', [AdminController::class, 'updateComment'])->middleware('auth')->name('admin.update.comment');
Route::delete('/admin/delete-comment/{comment}', [AdminController::class, 'deleteComment'])->middleware('auth')->name('admin.delete.comment');
