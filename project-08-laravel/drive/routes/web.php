<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

/***** Routes *****/
Route::get('/index', 'FileController@index')->name('index');
Route::get('/index/create', 'FileController@create')->name('create');
Route::post('/index/create', 'FileController@store')->name('store');
Route::get('/index/edit/{id}', 'FileController@edit')->name('edit');
Route::post('/index/edit/{id}', 'FileController@update')->name('update');
Route::get('/index/show/{id}', 'FileController@show')->name('show');
Route::get('/index/download/{id}', 'FileController@download')->name('download');
Route::get('/index/{id}', 'FileController@destroy')->name('destroy');