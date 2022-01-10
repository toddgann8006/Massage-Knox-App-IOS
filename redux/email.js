import * as ActionTypes from './ActionTypes';

export const email = (state = { errMess: null, email: "" }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EMAIL:
            return { ...state, errMess: null, email: action.payload };

        case ActionTypes.EMAIL_FAILED:
            return { ...state, errMess: action.payload };

        default:
            return state;
    }
}