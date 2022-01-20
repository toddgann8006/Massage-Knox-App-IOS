import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addEmail = email => ({
    type: ActionTypes.ADD_EMAIL,
    payload: email
})

export const postEmail = (email) => dispatch => {
    setTimeout(() => {
        dispatch(addEmail(email));
    }, 2000);
}

export const resetEmail = () => ({
    type: ActionTypes.RESET_EMAIL
})

export const resEmail = () => dispatch => {
    setTimeout(() => {
        dispatch(resetEmail());
    }, 2000);
}

export const emailFailed = errMess => ({
    type: ActionTypes.EMAIL_FAILED,
    payload: errMess
});

export const modalOff = () => ({
    type: ActionTypes.MODAL_OFF
})

export const toggleModalOff = () => dispatch => {
    setTimeout(() => {
        dispatch(modalOff());
    }, 2000);
}
export const fetchNewuser = () => (dispatch, getState) => {
    dispatch(newuserLoading());

    const { email } = getState().email;

    return fetch(baseUrl + 'user/' + email)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(user => dispatch(addNewuser(user.newuser)))
        .catch(error => dispatch(newuserFailed(error.message)));
};

export const fetchRewards = () => (dispatch, getState) => {
    dispatch(rewardsLoading());

    const { email } = getState().email;

    return fetch(baseUrl + 'user/' + email)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(reward => dispatch(addRewards(reward.rewards)))
        .catch(error => dispatch(rewardsFailed(error.message)));
};

export const newuserLoading = () => ({
    type: ActionTypes.NEWUSER_LOADING
});

export const newuserFailed = errMess => ({
    type: ActionTypes.NEWUSER_FAILED,
    payload: errMess
});

export const rewardsLoading = () => ({
    type: ActionTypes.REWARDS_LOADING
});

export const rewardsFailed = errMess => ({
    type: ActionTypes.REWARDS_FAILED,
    payload: errMess
});

export const addRewards = reward => ({
    type: ActionTypes.ADD_REWARDS,
    payload: reward
});

export const addNewuser = user => ({
    type: ActionTypes.ADD_NEWUSER,
    payload: user
});

export const postUser = email => dispatch => {

    const newEmail = {
        email: email
    }

    return fetch(baseUrl + 'user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEmail)
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(email => {
            dispatch(addEmail(email));
        })
        .catch(error => dispatch(emailFailed(error.message)));
}

export const addReward = reward => ({
    type: ActionTypes.ADD_REWARD,
    payload: reward
})

export const postReward = reward => (dispatch, getState) => {
    const newReward = reward

    const { email } = getState().email;

    return fetch(baseUrl + 'user/' + email, {
        method: 'PUT'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(dispatch(addReward(newReward)))
        .catch(error => dispatch(userFailed(error.message)))
}

export const addNewuserReward = newuser => ({
    type: ActionTypes.ADD_NEWUSER_REWARD,
    payload: newuser
})

export const postNewuser = newuser => (dispatch, getState) => {
    const newUserReward = newuser

    const { email } = getState().email;

    return fetch(baseUrl + 'user/' + email, {
        method: 'PUT'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(dispatch(addNewuserReward(newUserReward)))
        .catch(error => dispatch(rewardsFailed(error.message)))
}

export const resetReward = reset => ({
    type: ActionTypes.RESET_REWARD,
    payload: reset
});

export const postReset = () => (dispatch, getState) => {
    const { email } = getState().email;

    return fetch(baseUrl + 'user/' + email, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(dispatch(resetReward()))
        .catch(error => dispatch(rewardsFailed(error.message)))
}


