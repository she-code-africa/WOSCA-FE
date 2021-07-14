import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Subscribe from '../../components/subscribe';
import Card from '../../components/card';
import woman from '../../assets/images/eventwoman.png';
import man from '../../assets/images/eventman.png';
import '../../styles/views/event.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Events() {
    let eventCards = [];
    for (var i = 0; i < 9; i++) {
        eventCards.push(
            <Card
                eventTitle="Hacktoberfest Online Meetup in La Défense"
                eventLocation="La Défense, France"
                eventTime="2020/10/01 CET"
            />
        );
    }
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
                            <p className="lead"> Support open source and pick a limited edition T-shirts</p>
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
                                <Button className="sub-button" type="submit">SEARCH</Button>
                            </Col>
                            <Col></Col>
                        </Form.Row>
                    </Form>
                </div>
                <div className="row">
                    {eventCards}
                </div>
                <Subscribe />
            </div>
            <Footer />
        </React.Fragment >
    )
}

export default Events;