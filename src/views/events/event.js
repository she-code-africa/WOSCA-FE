import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/eventcard';
import woman from '../../assets/images/eventwoman.png';
import man from '../../assets/images/eventman.png';
import '../../styles/views/event.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {events_, events_search} from './eventService';
import { CircularProgress } from '@material-ui/core';


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            selectedEvent: null,
            loading: true,
            show: false,
            setShow: false,
            eventsList: [],
            message: '',
            location: '',
        };
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        var locator = this.state.location;
        events_search(locator)
            .then((response) => {
                var vop = response.data;
                var results = vop.data;
                this.setState({ loading: false })
                if (results.length > 0) {
                    this.setState({ message: ''})
                    this.setState({ eventsList: results })
                } else {
                    this.setState({ message: `No events found for ${locator}!` })
                }
            })
    }

    render() {

        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col up">
                                <img src={woman} alt="..." />
                            </div>
                            <div className="col-md-7 mid">
                                <h1>All Events</h1>
                                <p className="lead">Get free access to our events and programs designed to empower young African girls and women in tech with the technical skills needed to scale in Africa's open-source ecosystem.</p>
                            </div>
                            <div className="col down">
                                <img src={man} alt="..." />
                            </div>
                        </div>
                        <Form className="form" onSubmit={this.handleSearch}>
                            <Form.Row>
                                <Col>
                                    <Form.Control placeholder="Location" readOnly style={{visibility:'hidden'}} />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Search Location" name="location" value={this.state.location} onChange={this.changeHandler}  />
                                </Col>
                                <Col >
                                    <Button className="sub-button event-button" type="submit">SEARCH</Button>
                                </Col>
                                <Col className="hide-form"></Col>
                            </Form.Row>
                        </Form>
                    </div>
                    <div className='row'>
                        {this.state.loading ?
                            <CircularProgress style={{marginLeft:'auto', marginRight:'auto' }} />
                            : <p></p>
                        }
                    </div>
                    {
                        this.state.message ? 
                        <div className='row'>
                            <p  style={{marginLeft:'auto', marginRight:'auto', color:'#B70569' }}>{this.state.message}</p>
                        </div>
                        :
                        <div className="row events">
                            {this.state.eventsList.map((event) => (
                                <Card
                                    key={event._id}
                                    eventTitle={event.name}
                                    eventLocation={event.location}
                                    eventTime={event.startTime}
                                    eventEndTime={event.endTime}
                                    eventDetails={event.description}
                                    eventLink={event.event_link}
                                />
                            ))}
                        </div>    
                    }
                    <div className="jumbotron"></div>
                </div>
                <Footer />
            </React.Fragment >
        )
    }
    async componentDidMount() {
        await events_()
            .then((response) => {
                // console.log(response);
                var vop = response.data
                var all_events = vop.data[0].data;
                this.setState({ loading: false })
                if (all_events.length > 0) {
                    this.setState({ eventsList: all_events })
                } else {
                    this.setState({ message: 'No events found!' })
                }
            })
            .catch((error) => {
                this.setState({ loading : false });
                this.setState({ message: error })
                alert.error("Check Your Connection");
            });
    }
}
export default Events;