import React, { useContext } from 'react';
import Header from '../../components/header';
import Subscribe from '../../components/subscribe';
import Footer from '../../components/footer';
import '../../styles/views/faq.css';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <text
            className={isCurrentEventKey ? 'clos' : 'open'}
            onClick={decoratedOnClick}
        >
            {children}
        </text>
    );
}

function FAQ() {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-9"> <h1 >Frequently Asked Questions</h1></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-6"> <p className="lead"> Support open source and pick a limited edition
                    T-shirt or plant a tree. SCA Open source 2020 has ended. Keep contributing to open source & send your questions via  <text className="pmail">info@shecodeafrica</text>
                        </p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                
                <div>
                    <div className="row">
                        <div className="faqs offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                            <h5>General Questions</h5>
                            <Accordion defaultActiveKey="b">
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="a"> How can register for the hackathon?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="b"> How can register for the hackathon?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="c"> How can register for the hackathon?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="c">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="d"> How can register for the hackathon?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="d">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>

                            <h5>Reward Questions</h5>
                            <Accordion defaultActiveKey="b">
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="a"> How can register for the hackathon?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="b"> How can register for the hackathon?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="c"> How can register for the hackathon?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="c">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="d"> How can register for the hackathon?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="d">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>

                </div>
            
                <Subscribe />
            </div>
            <Footer />


        </React.Fragment>


    )
}

export default FAQ;