import * as ActionTypes from './ActionTypes';

export const reward = (state = { errMess: null, rewards: [], isNewUser: true }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_REWARD:
            if (state.rewards.length < 7) {
                return { ...state, rewards: state.rewards.concat(action.payload) };
            }

        default:
            return state;
    }
};

