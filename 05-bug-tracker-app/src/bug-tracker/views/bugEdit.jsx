import React, { Component } from 'react';

class BugEdit extends Component {
    state = { newBugName: '' };
    render = () => {
        const { newBugName } = this.state;
        const { addNew } = this.props;
        return (
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" value={newBugName} onChange={evt => this.setState({ newBugName: evt.target.value })} />
                <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
            </section>
        )
    }
}

export default BugEdit;