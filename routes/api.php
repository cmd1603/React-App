<?php

use Illuminate\Http\Request;
use App\Car;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('cars', 'CarsController@index');
Route::get('cars/{car}', 'CarsController@show');
Route::post('cars','CarsController@store');
Route::put('cars/{car}','CarsController@update');
Route::delete('cars/{car}', 'CarsController@delete');