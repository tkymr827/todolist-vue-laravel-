<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::apiResource('todos', 'TodoController');
Route::post("todos/post", "TodoController@store");
Route::post("todos/alldel", "TodoController@destroy");
Route::post("todos/delone", "TodoController@delone");
Route::post("todos/sample", "TodoController@sample");
