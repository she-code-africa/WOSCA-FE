import React, { Component } from 'react';
// import { columns, InsertButton } from 'react-bootstrap-table';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class MyCustomBody extends Component {


    getFieldValue() {
        const newRow = {};
        this.props.columns.forEach((column, i) => {
            newRow[column.field] = this.refs[column.field].value;
        }, this);
        return newRow;
    }

    render() {
        const { columns, validateState } = this.props;
        return (
            <div className='modal-body'>
                <h2 style={{ color: 'red' }}>Custom body</h2>
                <div>
                    {
                        this.props.columns.map((column, i) => {
                            const {
                                editable,
                                format,
                                field,
                                name,
                                hiddenOnInsert
                            } = column;

                            if (hiddenOnInsert) {
                                // when you want same auto generate value
                                // and not allow edit, for example ID field
                                return null;
                            }
                            const error = validateState[field] ?
                                (<span className='help-block bg-danger'>{validateState[field]}</span>) :
                                null;
                            return (
                                <div className='form-group' key={field}>
                                    <label>{name}</label>
                                    <input ref={field} type='text' defaultValue={''} />
                                    {error}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

class CustomInsertModalBodyTable extends React.Component {


    createCustomModalBody = (columns, validateState, ignoreEditable) => {
        return (
            <MyCustomBody columns={columns}
                validateState={validateState}
                ignoreEditable={ignoreEditable} />
        );
    }

    render() {
        const options = {
            insertModalBody: this.createCustomModalBody
        };
        const events = [
            { 'id': 1, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
            { 'id': 2, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
            { 'id': 3, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
            { 'id': 4, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
            { 'id': 5, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
        ]
        return (
            <BootstrapTable className="b_table" ref='events' data={events} pagination options={options} bordered={false} striped hover insertRow>
                <TableHeaderColumn dataField='id' isKey dataSort={true}>Event ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name' dataSort={true}>Event Name</TableHeaderColumn>
                <TableHeaderColumn dataField='location' dataSort={true}>Event Location</TableHeaderColumn>
                <TableHeaderColumn dataField='startTime'>Start Time</TableHeaderColumn>
                <TableHeaderColumn dataField='endTime'>End Time</TableHeaderColumn>
                <TableHeaderColumn dataField='description' hidden>Description</TableHeaderColumn>
            </BootstrapTable>

        );
    }
}

export default CustomInsertModalBodyTable;