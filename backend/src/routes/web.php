<?php

use Illuminate\Support\Facades\Route;

// For public application
Route::any('/{any}', 'SpaController@index')->where('any', '^(?!api).*$');
