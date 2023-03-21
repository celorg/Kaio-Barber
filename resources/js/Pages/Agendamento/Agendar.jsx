import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,} from '@inertiajs/react';
import { InputLabel, TextField, Select,MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';

//Logo

export default function Dashboard(props) {

    const [categorias] = useState(props.categorias);
    const [servicos, setServicos] = useState(props.servicos);

    const [categoria, setCategoria] = useState('');
    const [servico, setServico] = useState('');

    function real(preco){
        const real = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return real
    }

    useEffect (() => {
        if(categoria != '' && categoria >= 0){
            const filtrar = props.servicos.filter(item => item.categoria_id === categoria);
            setServicos(filtrar);
            setServico('');
        }
       
    }, [categoria])
     

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Agendamento" />

            <article className='agendamento'>
                
                <form className='bg-white p-5'>
                    <h2 className='text-center text-black mb-4'>Agendamento</h2>
                    <div>
                        <div className="mb-4">
                            <InputLabel 
                                id="select-categoria"
                            >Categoria
                            </InputLabel>
                            
                            <Select
                                labelId="select-categoria"
                                id='select-categoria'
                                value={categoria}
                                onChange={e => setCategoria(e.target.value)}
                                label="Categoria"
                                sx={{width: 300}}
                            >
                                <MenuItem value="">
                                    Seleciona a Categoria
                                </MenuItem>
                                {categorias && categorias.map((categoria) => (
                                    <MenuItem value={categoria.id} key={categoria.id}>
                                        {categoria.categoria}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                        <div className='mb-4'>
                            <InputLabel 
                                id="select-servico"
                            >Serviços
                            </InputLabel>
                            
                            <Select
                                labelId="select-servico"
                                id='select-servico'
                                value={servico}
                                onChange={e => setServico(e.target.value)}
                                label="Serviço"
                                sx={{width: 300}}
                            >
                                <MenuItem value="">
                                    <em>Selecione o Serviço</em>
                                </MenuItem>
                                {servicos && servicos.map((servico) => (
                                    <MenuItem value={servico.id} key={servico.id} sx={{width: 300}}>
                                        {servico.servico} - {real(servico.preco)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    
                    </div>
                </form>
            
            </article>
        </AuthenticatedLayout>
    );
}
