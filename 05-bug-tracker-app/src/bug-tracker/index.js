import React, { Fragment } from 'react'
import views from './views';
import './index.css';

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

export default BugTracker;