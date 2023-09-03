import { useState } from 'react';
import { rules } from '../helpers/validationRules';

const useFormValidation = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        validateField(name, value);
    };


    const validateField = (fieldName, value) => {
        const fieldRules = rules[fieldName];
        const fieldErrors = [];

        for (const rule of fieldRules) {
            if (!rule.validate(value)) {
                fieldErrors.push(rule.errorMessage);
            }
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [fieldName]: fieldErrors.length > 0 ? fieldErrors : null
        }));
    };


    const resetFormData = () => {
        setFormData(initialState);
    };

    const validateForm = () => {
        const formErrors = {};

        for (const field in rules) {
            const fieldErrors = [];
            for (const rule of rules[field]) {
                if (!rule.validate(formData[field])) {
                    fieldErrors.push(rule.errorMessage);
                }
            }
            if (fieldErrors.length > 0) {
                formErrors[field] = fieldErrors;
            }
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const isFormValid = Object.values(errors).every(fieldErrors => fieldErrors === null);

    return {
        formData,
        errors,
        isFormValid,
        handleChange,
        validateForm,
        resetFormData
    };
};

export default useFormValidation;
