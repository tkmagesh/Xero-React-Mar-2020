import React from 'react';

const BugItem = ({ bug, remove, toggle }) => (
    <li>
        {bug.isClosed ?
            (<span className="bugname closed" onClick={() => toggle(bug)}>{bug.name}</span>) :
            (<span className="bugname" onClick={() => toggle(bug)}>{bug.name}</span>)
        }
        <div className="datetime">{bug.createdAt.toString()}</div>
        <input type="button" value="Delete" onClick={() => remove(bug)} />
    </li>
);

export default BugItem;