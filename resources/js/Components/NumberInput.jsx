import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'number', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    'border-gray-300 text-gray-500 focus:border-black focus:ring-black rounded-md shadow-sm ' +
                    className
                }
                
                ref={input}
            />
        </div>
    );
});
