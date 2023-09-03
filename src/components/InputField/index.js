import React from 'react';
const InputField = ({ id, name, value, onChange, placeholder, error }) => {
    return (
        <>
            <input
                id={id}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
            {error && <span><i className="material-icons">error</i> {error}</span>}
        </>
    );
};

export default InputField;
