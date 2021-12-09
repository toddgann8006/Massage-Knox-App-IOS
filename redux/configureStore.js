import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reward } from './reward';
import { newuser } from './newuser';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reward,
            newuser
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}