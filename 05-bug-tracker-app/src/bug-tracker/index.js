import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import views from './views';
import './index.css';
import * as bugActionCreators from './actions';

const { BugStats, BugEdit, BugList, BugSort } = views;

const BugTracker = ({ bugs, addNew, toggle, remove, removeClosed }) => (
    <Fragment>
        <h3>Bug Tracker</h3>
        <hr/>
        <BugStats bugs={bugs} />
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
    ({bugsData : bugs}) => ({bugs}),
    dispatch => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);