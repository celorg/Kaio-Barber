import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
//css
import './Dashboard.css';
//Logo
import Logo from '../../img/logo.jpeg';

//icons
import {FaQuoteRight,FaArrowRight} from 'react-icons/fa';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <article className='welcome'>
                <aside className='div-inicio'>
                    <div className='primeiro-pr'>
                        <span className='linha-horizontal'></span>
                        <h6>Já conhece nossos serviços?</h6>
                    </div>
                    <div className='div-titulo'>
                        <h1>Encontre aqui o barbeiro certo para você!!</h1>
                    </div>
                    <div className='div-frase'>
                        <span ><FaQuoteRight className='aspas' /></span>
                        <p>O sucesso é a soma de pequenos esforços repetidos dia após dia.</p>
                    </div>
                    <div className='div-btn'>
                        <Link><FaArrowRight/> <p>Agende seu horário</p></Link>
                    </div>
                </aside>
                <aside className='logo-gr'>
                    <img src={Logo} alt="Kaio barber" title='Barbearia' />
                </aside>
            
            </article>
        </AuthenticatedLayout>
    );
}
