import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';

const rootReducer = combineReducers({
    bugsData: reducers.bugsReducer,
    shouldFilter : reducers.bugsFilterReducer,
    spinnerData: spinnerReducer
});

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log(action);
    console.group('BEFORE DISPATCH');
    console.log(store.getState());
    console.groupEnd();
    next(action);
    console.group('AFTER DISPATCH');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
};
    
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

window['store'] = store;

export default store;

