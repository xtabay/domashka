import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import myApp from '../reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    myApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
