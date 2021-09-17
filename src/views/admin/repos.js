import React, { Component } from 'react';

class repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="greeting">
                    <p className="greeting-text">Submitted PRs</p>
                </div>
            </React.Fragment>
        )
    }
}
export default repos;