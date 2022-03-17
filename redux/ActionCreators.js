import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// Send Post request to server after user registers email

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
};

// Dispatches user email to add email

export const postEmail = (email) => dispatch => {
    setTimeout(() => {
        dispatch(addEmail(email));
    }, 2000);
};

// Takes dispatch from postEmail and sets state in email reducer

export const addEmail = email => ({
    type: ActionTypes.ADD_EMAIL,
    payload: email
});

// Dispatches reset to resetEmail

export const resEmail = () => dispatch => {
    setTimeout(() => {
        dispatch(resetEmail());
    }, 2000);
};

// Sets state of email to empty in email reducer

export const resetEmail = () => ({
    type: ActionTypes.RESET_EMAIL
});

export const emailLoading = () => ({
    type: ActionTypes.EMAIL_LOADING
});

export const emailFailed = errMess => ({
    type: ActionTypes.EMAIL_FAILED,
    payload: errMess
});

// Sends GET request to the server to receive the newuser value and dispatches it to addNewuser

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

// Takes dispatch from fetchNewuser and sets state in newuser reducer

export const addNewuser = user => ({
    type: ActionTypes.ADD_NEWUSER,
    payload: user
});

// Sends PUT request to the server to add to newuser reward array and dispatches to addNewUserReward

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
};

// Takes dispatch from postNewuser and adds to newuser array in newuser reducer

export const addNewuserReward = newuser => ({
    type: ActionTypes.ADD_NEWUSER_REWARD,
    payload: newuser
});

export const newuserLoading = () => ({
    type: ActionTypes.NEWUSER_LOADING
});

export const newuserFailed = errMess => ({
    type: ActionTypes.NEWUSER_FAILED,
    payload: errMess
});

// Sends GET request to server to receive rewards value and dispatches it to addRewards

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

// Takes dispatch from fetchRewards and sets state in rewards reducer when app is first loaded

export const addRewards = reward => ({
    type: ActionTypes.ADD_REWARDS,
    payload: reward
});

// Sends PUT request to the server to add to rewards array and dispatches to addReward

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
};

// Takes dispatch from postReward and adds it to the rewards array in rewards reducer

export const addReward = reward => ({
    type: ActionTypes.ADD_REWARD,
    payload: reward
});

//Sends a delete request to the server to set the rewards array to empty and sends a dispatch to resetReward

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
};

// Receives dispatch from postReset and sets the rewards array to empty in rewards reducer

export const resetReward = reset => ({
    type: ActionTypes.RESET_REWARD,
    payload: reset
});

export const rewardsLoading = () => ({
    type: ActionTypes.REWARDS_LOADING
});

export const rewardsFailed = errMess => ({
    type: ActionTypes.REWARDS_FAILED,
    payload: errMess
});

// Sends a dispatch to modalOff

export const toggleModalOff = () => dispatch => {
    setTimeout(() => {
        dispatch(modalOff());
    }, 2000);
};

// Receives dispatch from toggleModalOff and sets the value of showModal to false in modal reducer. This causes the email input and register button to be hidden on the home page.

export const modalOff = () => ({
    type: ActionTypes.MODAL_OFF
});