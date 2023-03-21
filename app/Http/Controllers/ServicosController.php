<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Servico;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicosController extends Controller
{
    public function index(Request $request)
    {
        $msg = $request->get('msg');

        return Inertia::render('Admin/Servicos', [
            'servicos' => Servico::get(['id','servico','preco','categoria']),
            'msg' => $msg,
        ]);
    }
    
    public function store(Request $request, Servico $servico)
    {
        $regras = [
            'servico' => 'required|string|min:3|max:50|unique:servicos',
            'preco' => 'required|numeric',
            'categoria' => 'required|string|min:3|max:30',
        ];
        $feedback = [
            'required' => 'O campo :attribute é obrigatório',
            'string' => 'O campo :attribute deve ser um texto',
            'min' => 'O campo :attribute deve ter no mínimo 3 caracteres',
            'servico.max' => 'O campo Serviço deve ter no máximo 50 caracteres',
            'servico.unique' => 'Este serviço já está cadastrado',
            'preco.numeric' => 'Este campo deve ser número',
        ];

        $request->validate($regras, $feedback);

        $servico->servico = $request->servico;
        $servico->preco = $request->preco;
        $servico->categoria = $request->categoria;

        $servico->save();

        return redirect()->route('servicos.index',['msg' => 'Adcionado com sucesso']);
        
    }

    public function update(Request $request, Servico $servico)
    {
        $regras = [
            'servico' => 'required|min:3|max:50|string',
            'preco' => 'required|numeric',
            'categoria' => 'required|min:3|max:30|string',
        ];
        $feedback = [
            'required' => 'O campo :attribute é obrigatório',
            'string' => 'O campo :attribute deve ser um texto',
            'min' => 'O campo :attribute deve ter no mínimo 3 caracteres',
            'servico.max' => 'O campo Serviço deve ter no máximo 50 caracteres',
            'preco.numeric' => 'Este campo deve ser número',
        ];

        $request->validate($regras, $feedback);

        $servico->servico = $request->servico;
        $servico->preco = $request->preco;
        $servico->categoria = $request->categoria;

        $servico->save();   

        return redirect()->route('servicos.index');
        
    }

    public function destroy( Request $request )
    {
        
        Servico::destroy([
            'id' => $request->id
        ]);
        return redirect()->route('servicos.index');
    }
}
