import * as ActionTypes from './ActionTypes';

export const modal = (state = { showModal: true }, action) => {
    switch (action.type) {
        case ActionTypes.MODAL_OFF:
            return { ...state, showModal: false }
        default:
            return state;
    }
}