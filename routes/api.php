<?php

use App\Http\Controllers\PortofolioController;
use App\Http\Controllers\TestimoniController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('portofolios', PortofolioController::class);
Route::apiResource('testimonis', TestimoniController::class);
Route::apiResource('teams', TeamController::class);
Route::apiResource('products', ProductController::class);
Route::apiResource('works', WorkController::class);
Route::apiResource('contacts', ContactController::class);