import { SET_USER_DATA } from './actionTypes';

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: userData
});