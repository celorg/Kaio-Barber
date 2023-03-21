import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 text-gray-300 ${
                active
                    ? 'border-teal-400 text-teal-400 bg-light hover:text-gray-100 focus:text-white focus:border-teal-400'
                    : 'border-transparent text-gray-300 hover:text-gray-100 hover:border-teal-400 focus:text-gray-100 focus:border-teal-400'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
