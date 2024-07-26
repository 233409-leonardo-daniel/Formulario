import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input input-bordered w-full px-4 py-2 border rounded border-gray-300 focus:border-blue-500 focus:outline-none"
    />
);

export default Input;
