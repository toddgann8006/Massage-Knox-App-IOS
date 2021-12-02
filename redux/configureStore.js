import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reward } from './reward';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reward
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}