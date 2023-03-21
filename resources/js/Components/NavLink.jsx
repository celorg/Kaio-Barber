import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-2 pt-1 border-b-2 text-gray-300 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-teal-400 text-teal-400 focus:border-teal-400 '
                    : 'border-transparent text-gray-500 hover:text-white hover:border-teal-400 focus:text-white focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
