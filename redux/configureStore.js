import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { email } from './email';
import { newuser } from './newuser';
import { rewards } from './rewards';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            email,
            newuser,
            rewards
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}