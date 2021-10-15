import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import Modal from "react-bootstrap/Modal";
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent} from "./EventService"

class events extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     events: [],
    //     //     eventSelected: false,
    //     // };
    // }

    state = {
        events: [],
        eventSelected: false
    }

    componentDidMount(){
        console.log("ssssss")
        this.getEvents()
    }

    async getEvents(){
        console.log(this.state, "Sss")
        let {data} = await getAllEvents()
        this.setState({events: data.events})
        console.log(this.state, "ss")
    }

    handleSave(save) {
        console.log("Save new event");
        save();
    }

    handleModalClose(closeModal) {
        closeModal();
    }

    createCustomInsertButton = (onClick) => {
        return (
          <InsertButton
            btnText='New Event'
            btnContextual='btn-warning'
            className='my-custom-class'
            btnGlyphicon='glyphicon-add'
            onClick={ () => this.handleSave(onClick) }/>
        );
    }

    closeDetails = () => {
        this.setState({
            eventSelected: false,
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
            noDataText: 'No registered events',
            insertBtn: this.createCustomInsertButton,
            onRowClick: (row) => {
                this.setState({
                    description: row.description,
                });
                this.setState({
                    eventSelected: true,
                });
            }
        };
        return (
            <React.Fragment>
                <div className="greeting">
                    <p className="greeting-text">Added Events</p>
                </div>
                <BootstrapTable className="b_table" ref='events' data={this.state.events} pagination options={options} bordered={false} striped hover insertRow>
                    <TableHeaderColumn dataField='id' isKey dataSort={true} hiddenOnInsert>Event ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Event Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='location' dataSort={true}>Event Location</TableHeaderColumn>
                    <TableHeaderColumn dataField='startTime'>Start Time</TableHeaderColumn>
                    <TableHeaderColumn dataField='endTime'>End Time</TableHeaderColumn>
                    <TableHeaderColumn dataField='description' hidden>Description</TableHeaderColumn>
                </BootstrapTable>
                <Modal
                    show={this.state.eventSelected}
                    onHide={this.closeDetails}
                    {...this.props}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    className="modal_fit"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Event Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.state.description}</p>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
export default events;