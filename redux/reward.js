import * as ActionTypes from './ActionTypes';

export const reward = (state = { rewards: [] }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_REWARD:
            if (state.rewards.length < 7) {
                return { ...state, rewards: state.rewards.concat(action.payload) };
            }
        case ActionTypes.RESET_REWARD:
            if (state.rewards.length >= 7) {
                return { ...state, rewards: [] };
            }

        default:
            return state;
    }
};

