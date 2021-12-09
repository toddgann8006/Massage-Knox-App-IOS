import * as ActionTypes from './ActionTypes';

export const newuser = (state = { newuser: [] }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_NEWUSER:
            if (state.newuser.length < 1) {
                return { ...state, newuser: state.newuser.concat(action.payload) };
            }
        default:
            return state;
    }
}