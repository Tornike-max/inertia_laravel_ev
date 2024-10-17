<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;


Route::get('/admin', [AdminController::class, 'dashboard'])->middleware(['auth'])->name('admin.dashboard');
Route::get('/admin/user/{user}', [AdminController::class, 'showUser'])->middleware(['auth'])->name('admin.user');
