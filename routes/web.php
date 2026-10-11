<?php

<<<<<<< HEAD
=======
use App\Http\Controllers\ContactController;
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
<<<<<<< HEAD
    Route::inertia('contact', 'Contact')->name('contact-us');
=======
    // Route::inertia('contact', 'Contact')->name('contact-us');
    Route::resource('contact', ContactController::class)->name('index', 'contact-us');
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
});

require __DIR__.'/settings.php';
