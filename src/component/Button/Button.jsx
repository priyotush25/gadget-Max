import React from 'react';

const Button = ({children, className}) => {
    return (
        <div className={`px-4 py-2 font-semibold bg-blue-500 rounded-xs hover:cursor-pointer hover:bg-blue-600 ${className}`}>
            {children}
        </div>
    );
};

export default Button;