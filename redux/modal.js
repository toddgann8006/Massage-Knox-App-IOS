import * as ActionTypes from './ActionTypes';

export const modal = (state = { showModal: true }, action) => {
    switch (action.type) {
        case ActionTypes.MODAL_OFF:
            return { ...state, showModal: false }
        case ActionTypes.MODAL_ON:
            return { ...state, showModal: true }
        default:
            return state;
    }
}