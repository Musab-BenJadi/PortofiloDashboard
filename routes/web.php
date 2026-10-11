<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
    // Route::inertia('contact', 'Contact')->name('contact-us');
    Route::resource('contact', ContactController::class)->name('index', 'contact-us');
});

require __DIR__.'/settings.php';
