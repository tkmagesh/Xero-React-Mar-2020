import React from 'react';
import { connect } from 'react-redux';

const BugStats = ({ total, closedCount }) => {
    return (
        <section className="stats">
            <span className="closed">{closedCount}</span>
            <span> / </span>
            <span>{total}</span>
        </section>
    )
}
export default connect(
    ({bugsData : bugs}) => ({ 
        total : bugs.length, 
        closedCount : bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0)
    })
)(BugStats);