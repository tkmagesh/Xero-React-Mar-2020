import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { bindActionCreators } from 'redux';
import * as bugActionCreators from './bug-tracker/actions';
import appStore from './store';
import BugTracker from './bug-tracker';
import spinnerActionCreators from './spinner/actions';
import Spinner from './spinner';


const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);
const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp() {
    const storeState = appStore.getState(),
        bugs = storeState.bugsData,
        value = storeState.spinnerData;
    ReactDOM.render(
        <div>
            <h1>My App</h1>
            <Spinner value={value} {...spinnerActionDispatchers} />
            <BugTracker bugs={bugs} {...bugActionDispatchers} />
        </div>,
        document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
