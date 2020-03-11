import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';
import loggerMiddleware from './middlewares/loggerMiddleware';
import asyncMiddleware from './middlewares/asyncMiddleware';
import logger from 'redux-logger';
import promiseMiddleware from './middlewares/promiseMiddleware';

const rootReducer = combineReducers({
    bugsData: reducers.bugsReducer,
    shouldFilter : reducers.bugsFilterReducer,
    spinnerData: spinnerReducer
});

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware));
export default store;

