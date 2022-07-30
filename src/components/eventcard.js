import React, { Component }  from "react";
import '../styles/components/eventcard.css';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Moment from 'moment';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeid: null,
            setShow: false,
            show: false,

        }
    }

    handleClose = () => {
        this.setState({setShow: false, activeid: null})
    }
    handleShow = e => {
        this.setState({setShow: true, activeid: e})
    }

    render() {
        return (
            <>
            <div className="card event-card" onClick={e => {this.handleShow(this.props._id) }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.eventTitle}</h5>
                    <h6 className="card-subtitle mb-2">{this.props.eventLocation}</h6>
                    <p className="card-text">{Moment(this.props.eventTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
            </div>
            <Modal 
                show = {this.state.setShow}
                onHide= {this.handleClose}
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter" 
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Event Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.eventTitle}</h4>
                    <h6>Starts: {Moment(this.props.eventTime).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                    <h6>Ends: {Moment(this.props.eventEndTime).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                    <h6>{this.props.eventLocation}</h6>
                    <br/>
                    <h5>Description: <br/>{this.props.eventDetails}</h5>
                    
                </Modal.Body>
                <Modal.Footer>
                    {this.props.eventLink ?
                        <Button className="sub-button event-button">REGISTER</Button>
                    : <></> }
                    <Button className="eventcard-button event-button">
                        <a href={this.props.eventLink} target="_blank" rel="noreferrer" className="event-link-botton">
                            REGISTER
                        </a>
                    </Button>
                    <Button className="eventcard-button event-button" onClick={this.handleClose}>CLOSE</Button>
                </Modal.Footer>

            </Modal>
            </>
        );
    }
}

export default Card;