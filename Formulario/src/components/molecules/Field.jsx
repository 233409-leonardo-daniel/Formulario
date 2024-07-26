import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const Field = ({ type, placeholder, text, value, onChange }) => (
    <div className="mb-4">
        <Label text={text} />
        <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
);

export default Field;
