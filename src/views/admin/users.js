import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Modal from "react-bootstrap/Modal";

class users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { 'id': 1, 'username': 'maryam', 'email': 'maryam@maryam.com', 'total': '12' },
                { 'id': 2, 'username': 'ola', 'email': 'ola@ola.com', 'total': '13' },
                { 'id': 3, 'username': 'elizabeth', 'email': 'oal@ola.com', 'total': '14' },
                { 'id': 4, 'username': 'olu', 'email': 'olu@o.com', 'total': '16' },
                { 'id': 5, 'username': 'esse', 'email': 'esse@ol.com', 'total': '22' },
            ],
            userSelected: false,
            email: "",
        };
    }
    closeModal = () => {
        this.setState({
            userSelected: false,
        })
    }
    render() {
        const options = {
            page: 1,
            sizePerPageList: [{
                text: '3', value: 3
            }, {
                text: '6', value: 6
            }],
            sizePerPage: 3,
            pageStartIndex: 1,
            paginationSize: 3,
            prePage: 'Prev',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            paginationPosition: 'bottom',
            noDataText: 'No registered users',
            onRowClick: (row) => {
                this.setState({
                    email: row.email,
                });
                this.setState({
                    userSelected: true,
                });
            }
        }
        return (
            <React.Fragment>
                <div className="greeting">
                    <h3 className="greeting-text">Registered Users</h3>
                </div>
                <BootstrapTable className="b_table" ref='users' data={this.state.users} pagination options={options}  bordered={false} striped hover>
                    <TableHeaderColumn dataField='id' isKey dataSort={ true }>User ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='username' dataSort={ true }>Github Username</TableHeaderColumn>
                    <TableHeaderColumn dataField='total'>Total Contributions</TableHeaderColumn>
                </BootstrapTable>
                <Modal
                    show={this.state.userSelected}
                    onHide={this.closeModal}
                    {...this.props}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    className="modal_fit"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Email Address: {this.state.email}</p>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
export default users;