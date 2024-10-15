<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;


Route::get('/admin', [AdminController::class, 'dashboard'])->middleware(['auth'])->name('admin.dashboard');
