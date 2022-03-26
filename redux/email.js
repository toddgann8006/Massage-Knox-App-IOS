import * as ActionTypes from './ActionTypes';

export const email = (state = { errMess: null, email: "" }, action) => {
    switch (action.type) {

        // Receives dispatch and sets email value in state

        case ActionTypes.ADD_EMAIL:
            return { ...state, errMess: null, email: action.payload };

        // Sets email value in state to empty

        case ActionTypes.RESET_EMAIL:
            return { ...state, errMess: null, email: "" };

        case ActionTypes.RESET_EMAIL_ERROR:
            return { ...state, errMess: null }

        case ActionTypes.EMAIL_LOADING:
            return { ...state, isLoading: true, errMess: null, email: "" };

        case ActionTypes.EMAIL_FAILED:
            return { ...state, errMess: action.payload };

        default:
            return state;
    }
}