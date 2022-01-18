import * as ActionTypes from './ActionTypes';

export const rewards = (state = {
    isLoading: true,
    errMess: null,
    rewards: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_REWARDS:
            return { ...state, isLoading: false, errMess: null, rewards: action.payload };

        case ActionTypes.ADD_REWARD:
            const newReward = action.payload;
            return { ...state, rewards: state.rewards.concat(newReward) }

        case ActionTypes.REWARDS_LOADING:
            return { ...state, isLoading: true, errMess: null, rewards: [] }

        case ActionTypes.REWARDS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        case ActionTypes.RESET_REWARD:
            return { ...state, rewards: [] };

        default:
            return state;
    }
};

