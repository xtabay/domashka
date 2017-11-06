import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import todoApp from '../reducers/reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ));
