<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FuncionarioController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Perfil',[]);
    }
}
