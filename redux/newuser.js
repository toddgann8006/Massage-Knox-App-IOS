import * as ActionTypes from './ActionTypes';

export const newuser = (state = {
    isLoading: true,
    errMess: null,
    newuser: []
}, action) => {

    switch (action.type) {

        // Receives newuser value from server when app is loading and sets it as newuser state.

        case ActionTypes.ADD_NEWUSER:
            return { ...state, isLoading: false, errMess: null, newuser: action.payload };

        case ActionTypes.NEWUSER_LOADING:
            return { ...state, isLoading: true, errMess: null, newuser: [] };

        case ActionTypes.NEWUSER_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
