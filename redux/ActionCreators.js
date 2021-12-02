import * as ActionTypes from './ActionTypes';

export const addReward = reward => ({
    type: ActionTypes.ADD_REWARD,
    payload: reward
});

export const rewardFailed = errMess => ({
    type: ActionTypes.REWARD_FAILED,
    payload: errMess
});