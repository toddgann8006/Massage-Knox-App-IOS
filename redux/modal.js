import * as ActionTypes from './ActionTypes';

export const modal = (state = { showModal: true }, action) => {
    switch (action.type) {

        // Sets state of showModal to false. This causes the email input and register button to be hidden on the home page.

        case ActionTypes.MODAL_OFF:
            return { ...state, showModal: false };

        default:
            return state;
    }
}