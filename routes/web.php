<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


//Website route - home page where match anything except 'admin' word
Route::get('/{path?}', function () {
    return view('website');
})->where('path', '[^admin]*');

// Admin route - admin panel, matching everything after the 'admin' word
Route::get('/admin/{path?}', function () {
    return view('admin');
})->where('path', '.*');
