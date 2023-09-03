import {isEmpty, isAlpha, isEmail, isLength} from 'validator';

export const rules = {
    firstName: [
        {
            validate: value => !isEmpty(value),
            errorMessage: "First Name is required"
        },
        {
            validate: value => isAlpha(value),
            errorMessage: "First Name should only contain letters"
        }
    ],
    lastName: [
        {
            validate: value => !isEmpty(value),
            errorMessage: "Last Name is required"
        },
        {
            validate: value => isAlpha(value),
            errorMessage: "Last Name should only contain letters"
        }
    ],
    email: [
        {
            validate: value => isEmail(value),
            errorMessage: "Invalid Email"
        }
    ],
    message: [
        {
            validate: value => isLength(value, { min: 10 }),
            errorMessage: "Message should be at least 10 characters long"
        }
    ]
};