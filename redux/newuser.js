import * as ActionTypes from './ActionTypes';

export const newuser = (state = {
    isLoading: true,
    errMess: null,
    newuser: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_NEWUSER:
            return { ...state, isLoading: false, errMess: null, newuser: action.payload };

        case ActionTypes.NEWUSER_LOADING:
            return { ...state, isLoading: true, errMess: null, newuser: [] }

        case ActionTypes.NEWUSER_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        case ActionTypes.ADD_NEWUSER_REWARD:
            const newuserReward = action.payload;
            return { ...state, newuser: state.newuser.concat(newuserReward) };

        default:
            return state;
    }
};

