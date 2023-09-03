import { ADD_USER_TO_LIST } from '../actions/actionTypes';
import initialState from '../initialState';

const userListReducer = (state = initialState.userList, action) => {
    switch (action.type) {
        case ADD_USER_TO_LIST:
            return [...state, action.payload];
        case 'PLACEHOLDER_CASE':
            return state;
        default:
            return state;
    }
};

export default userListReducer;
