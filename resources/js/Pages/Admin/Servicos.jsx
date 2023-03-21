//Layout
import AdminLayout from '@/Layouts/AdminLayout';
//Components
import AdicionarServico from './Partials/AdicionarServico';
import UpdateServico from './Partials/UpdateServico';

import { Head, Link, } from '@inertiajs/react';


export default function Dashboard(props) {

    return (

        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Serviços" />
            {props.msg && <div>{props.msg}</div>}
            <div className="py-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                
                    <h1 className='text-lg font-large mb-6 text-center text-white'>Serviços</h1>
                    <div className="my-2 flex justify-end">
                        <AdicionarServico  className="max-w-xl" servicos={props.servicos}/>
                    </div>
                    <div className='my-2 flex justify-center '>
                        <UpdateServico servicos={props.servicos}/>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
