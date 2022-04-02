import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Subscribe from '../../components/subscribe';
import Card from '../../components/eventcard';
import woman from '../../assets/images/eventwoman.png';
import man from '../../assets/images/eventman.png';
import '../../styles/views/event.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from 'axios';


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            eventsList: [],
        };
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
                        <Form className="form">
                            <Form.Row>
                                <Col>
                                    <Form.Control placeholder="Location" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Time Zone" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Keyword" />
                                </Col>
                                <Col >
                                    <Button className="sub-button event-button" type="submit">SEARCH</Button>
                                </Col>
                                <Col className="hide-form"></Col>
                            </Form.Row>
                        </Form>
                    </div>
                    <div className="row events">
                        {this.state.eventsList.map((event) => (
                            <Card
                                key={event.id}
                                eventTitle={event.name}
                                eventLocation={event.location}
                                eventTime={event.startTime}
                            />
                        ))}
                    </div>
                    {/* <Subscribe /> */}
                    <div className="jumbotron"></div>
                </div>
                <Footer />
            </React.Fragment >
        )
    }
    async componentDidMount() {
        await axios.get('https://wosca-backend.herokuapp.com/api/v1/events')
            .then((response) => {
                var vop = response.data
                this.setState({ eventsList: vop.data.events })
            })
    }
}
export default Events;