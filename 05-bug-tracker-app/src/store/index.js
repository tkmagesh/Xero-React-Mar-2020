import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';
import loggerMiddleware from './middlewares/loggerMiddleware';
import asyncMiddleware from './middlewares/asyncMiddleware';
import logger from 'redux-logger';

const promiseMiddleware = (store) => (next) => (action) => {
    if (action instanceof Promise){
        action
            .then(actionObj => next(actionObj))
    } else {
        next(action);
    }
}
const rootReducer = combineReducers({
    bugsData: reducers.bugsReducer,
    shouldFilter : reducers.bugsFilterReducer,
    spinnerData: spinnerReducer
});

const store = createStore(rootReducer, applyMiddleware(logger, asyncMiddleware, promiseMiddleware));
export default store;

