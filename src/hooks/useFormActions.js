import { useDispatch } from 'react-redux';
import { addUserToList } from '../store/actions/userActions';

const useFormActions = (formData, validateForm, resetFormData) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(addUserToList(formData));
            alert("Data saved successfully!");
            resetFormData();
        }
    };

    return handleSubmit;
};

export default useFormActions;
