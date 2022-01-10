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

export const emailFailed = errMess => ({
    type: ActionTypes.EMAIL_FAILED,
    payload: errMess
});

export const fetchUser = () => (dispatch, getState) => {
    dispatch(userLoading());

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
        .then(user => dispatch(addUser(user)))
        .catch(error => dispatch(userFailed(error.message)));
};

export const userLoading = () => ({
    type: ActionTypes.USER_LOADING
});

export const userFailed = errMess => ({
    type: ActionTypes.USER_FAILED,
    payload: errMess
});

export const addUser = user => ({
    type: ActionTypes.ADD_USER,
    payload: user
});


