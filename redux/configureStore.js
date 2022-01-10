import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { user } from './user';
import { email } from './email';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user,
            email
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}