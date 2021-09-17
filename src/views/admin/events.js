import React, { Component } from 'react';

class events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="greeting">
                    <p className="greeting-text">Added Events</p>
                </div>
            </React.Fragment>
        )
    }
}
export default events;