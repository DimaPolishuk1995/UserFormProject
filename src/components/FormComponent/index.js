import React from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import useFormActions from '../../hooks/useFormActions';
import initialState from '../../store/initialState';
import InputField from '../InputField';
import './FormComponent.css';

const formFields = [
    {
        id: 'firstName',
        name: 'firstName',
        placeholder: 'First Name',
    },
    {
        id: 'lastName',
        name: 'lastName',
        placeholder: 'Last Name',
    },
    {
        id: 'email',
        name: 'email',
        placeholder: 'Email',
    },
];

const FormComponent = () => {
    const formInitialState = initialState.userData;

    const {
        formData,
        errors,
        handleChange,
        validateForm,
        resetFormData,
        isFormValid
    } = useFormValidation(formInitialState);

    const handleSubmit = useFormActions(formData, validateForm, resetFormData);

    const { message } = formData;

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {formFields.map(field => (
                    <InputField
                        key={field.id}
                        id={field.id}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        error={errors[field.name]}
                    />
                ))}

                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    placeholder="Message"
                />
                {errors.message && <span><i className="material-icons">error</i> {errors.message}</span>}

                <button type="submit" disabled={!isFormValid} data-disabled={isFormValid ? 'false' : 'true'}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
