<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AgendamentoController;
use App\Http\Controllers\FuncionarioController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicosController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    //Perfil
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Agendamento
    Route::resource('agendamento', AgendamentoController::class);
});

//Admin
Route::prefix('admin')->middleware(['auth','admin'])->group(function () {
    Route::get('/home',[AdminController::class, 'index'])->name('admin.index');
    //Serviços
    Route::get('/servicos', [ServicosController::class, 'index'])->name('servicos.index');
    Route::post('/servicos', [ServicosController::class, 'store'])->name('servicos.store');
    Route::delete('/servicos', [ServicosController::class, 'destroy'])->name('servicos.destroy');
    Route::put('/servicos/{servico}', [ServicosController::class, 'update'])->name('servicos.update');

    //Perfil
    Route::get('/perfil', [FuncionarioController::class, 'index'])->name('funcionario.index');
});

require __DIR__.'/auth.php';
