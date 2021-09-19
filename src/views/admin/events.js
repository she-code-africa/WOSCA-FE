import React, { Component } from 'react';

class events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                { 'id': 1, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime':'2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event'},
                { 'id': 2, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime':'2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event'},
                { 'id': 3, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime':'2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event'},
                { 'id': 4, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime':'2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event'},
                { 'id': 5, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime':'2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
           ],
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