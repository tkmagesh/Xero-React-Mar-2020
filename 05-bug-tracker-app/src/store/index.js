import { createStore, combineReducers } from 'redux';
import * as reducers from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';

const rootReducer = combineReducers({
    bugsData: reducers.bugsReducer,
    spinnerData: spinnerReducer
});

const store = createStore(rootReducer);

export default store;

