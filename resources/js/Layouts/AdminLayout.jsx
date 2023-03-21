import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

//Css
import './Layout.css';



export default function Authenticated({ auth, children }) {

    
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen layout bg-black">
            <nav className="bg-black ">
                <div className="max-w-7xl mx-1 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex justify-between">
                            <div className="shrink-0 flex items-center">
                                <Link href={route('admin.index')}>
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" width="100px" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink replace href={route('admin.index')} active={route().current('admin.index')}>
                                    HOME
                                </NavLink>
                                <NavLink replace href="#" >
                                    AGENDA
                                </NavLink>
                                <NavLink replace href={route('servicos.index')} active={route().current('servicos.index')}>
                                    SERVIÇOS
                                </NavLink>
                                <NavLink replace href={route('funcionario.index')}>
                                    PERFIL
                                </NavLink>
                                <NavLink replace href={'/dashboard'}>
                                    PAGÍNA
                                </NavLink>
                                <NavLink method="post" href={route('logout')} as="button">
                                    SAIR
                                </NavLink>
                            </div>
                        </div>


                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <div className="px-4 mb-4">
                            <div className="font-medium text-base text-gray-200">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-200">{auth.user.email}</div>
                        </div>
                        <ResponsiveNavLink href={route('admin.index')} active={route().current('admin.index')}>
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href='#'>
                            Agenda
                        </ResponsiveNavLink>
                        <ResponsiveNavLink replace href={route('servicos.index')} active={route().current('servicos.index')}>
                            Serviços
                        </ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Sair
                        </ResponsiveNavLink>
                    </div>

                </div>
            </nav>

            <main>{children}</main>
            
        </div>
        
    );
}
