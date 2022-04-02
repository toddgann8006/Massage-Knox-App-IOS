import * as ActionTypes from './ActionTypes';

export const rewards = (state = {
    isLoading: true,
    errMess: null,
    rewards: []
}, action) => {

    switch (action.type) {

        // Receives rewards value from the server when app starts and sets it as rewards state

        case ActionTypes.ADD_REWARDS:
            return { ...state, isLoading: false, errMess: null, rewards: action.payload };

        // Sets rewards array in state to empty when QR code is scanned and the rewards array has a length of 6

        case ActionTypes.RESET_REWARD:
            return { ...state, rewards: [] };

        case ActionTypes.REWARDS_LOADING:
            return { ...state, isLoading: true, errMess: null, rewards: [] };

        case ActionTypes.REWARDS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
