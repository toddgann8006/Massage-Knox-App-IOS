import * as ActionTypes from './ActionTypes';

export const addReward = reward => ({
    type: ActionTypes.ADD_REWARD,
    payload: reward
});

export const postReward = reward => dispatch => {
    const newReward = reward

    setTimeout(() => {
        dispatch(addReward(newReward));
    }, 2000);
}