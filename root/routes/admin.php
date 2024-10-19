<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;


Route::get('/admin', [AdminController::class, 'dashboard'])->middleware(['auth'])->name('admin.dashboard');
Route::get('/admin/users', [AdminController::class, 'getUsers'])->middleware('auth')->name('admin.users');
Route::get('/admin/user/{user}/edit', [AdminController::class, 'editUser'])->middleware(['auth'])->name('admin.users.edit');
Route::put('/admin/user/update/{user}', [AdminController::class, 'updateUser'])->middleware(['auth'])->name('admin.users.update');
Route::delete('/admin/user/delete/{user}', [AdminController::class, 'deleteUser'])->middleware(['auth'])->name('admin.users.delete');

Route::get('/admin/user/{user}', [AdminController::class, 'showUser'])->middleware(['auth'])->name('admin.user');

Route::get('/admin/vehicles', [AdminController::class, 'getVehicles'])->middleware('auth')->name('admin.vehicles');
Route::get('/admin/ecavuators', [AdminController::class, 'getEvacuators'])->middleware('auth')->name('admin.evacuators');
Route::get('/admin/orders', [AdminController::class, 'getOrders'])->middleware('auth')->name('admin.orders');
