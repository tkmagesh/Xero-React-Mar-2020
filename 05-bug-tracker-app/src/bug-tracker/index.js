import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import views from './views';
import './index.css';
import * as bugActionCreators from './actions';

const { BugStats, BugEdit, BugList, BugSort } = views;

const BugTracker = ({ bugs, addNew, toggle, remove, removeClosed, applyFilter, load }) => (
    <Fragment>
        <h3>Bug Tracker</h3>
        <label>Apply Filter : </label>
        <input type="checkbox" onChange={ evt => applyFilter(evt.target.checked)} />
        <br/>
        <input type="button" value="LOAD BUGS" onClick={load} />
        <hr/>
        <BugStats />
        <BugSort />
        <BugEdit addNew={addNew} />
        <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </Fragment>
);

/* function mapStateToProps(storeState){
    const bugs = storeState.bugsData;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker); */

export default connect(
    ({bugsData : bugs, spinnerData, shouldFilter}) => shouldFilter ? ({bugs : bugs.filter(bug => bug.id % 2 === spinnerData % 2)}) : ({bugs}),
    dispatch => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);