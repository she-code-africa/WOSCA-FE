import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Modal from "react-bootstrap/Modal";

class repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [
                { 'id': 1, 'username': 'maryam', 'link': 'github.com', 'status': 'accepted' },
                { 'id': 2, 'username': 'maryam', 'link': 'github.com', 'status': 'rejected' },
                { 'id': 3, 'username': 'elizabeth', 'link': 'github.com', 'status': 'accepted' },
                { 'id': 4, 'username': 'esse', 'link': 'github.com', 'status': 'pending' },
                { 'id': 5, 'username': 'esse', 'link': 'github.com', 'status': 'accepted' },
            ],
            repoSelected: false,
            link: "",
            user: "",
        };
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
            noDataText: 'No registered repository',
            onRowClick: (row) => {
                this.setState({
                    user: row.user,
                    link: row.link,
                });
                this.setState({
                    repoSelected: true,
                });
            }
        }
        return (
            <React.Fragment>
                <div className="greeting">
                    <h3 className="greeting-text">Submitted PRs</h3>
                </div>
                <BootstrapTable className="b_table" ref='users' data={this.state.repos} pagination options={options}  bordered={false} striped hover>
                    <TableHeaderColumn dataField='id' isKey dataSort={ true }>Repo ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='username' dataSort={ true }>Owner</TableHeaderColumn>
                    <TableHeaderColumn dataField='link'>Link</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                </BootstrapTable>
                <Modal
                    show={this.state.repoSelected}
                    onHide={this.closeModal}
                    {...this.props}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    className="modal_fit"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Repo Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Owner: {this.state.user}</p>
                        <p><a href={this.state.link}>Visit</a></p>
                        <button>Accept</button>
                        <button>Reject</button>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
export default repos;