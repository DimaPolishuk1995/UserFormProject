import { useDispatch } from 'react-redux';
import { setUserData } from '../store/actions/userActions';

const useFormActions = (formData, validateForm, resetFormData) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(setUserData(formData));
            alert("Data saved successfully!");
            resetFormData();
        }
    };

    return handleSubmit;
};

export default useFormActions;
