import React from 'react';

const Button = ({ onClick, text }) => (
    <button
        onClick={onClick}
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
    >
        {text}
    </button>
);

export default Button;
