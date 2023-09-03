import { SET_USER_DATA } from '../actions/actionTypes';
import initialState from '../initialState';

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
