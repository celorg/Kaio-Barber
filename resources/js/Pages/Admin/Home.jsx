import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

//icons


export default function Dashboard(props) {
    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Admin" />

            <article className='welcome'>
                
                <h1>Admin</h1>
            
            </article>
        </AdminLayout>
    );
}
