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
                        <div className="col-md-6"> <p className="lead">We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa. Send your questions via  <text className="pmail">info@shecodeafrica</text>
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
                                        <ContextAwareToggle eventKey="a"> Who are we?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        She Code Africa is a community that is focused on celebrating and technically empowering young girls and women in technology across Africa. Our community consists of over 3000 members with active members across Nigeria, Ghana, Kenya, Zimbabwe, Uganda, South Africa, Cameroon, Cote D'Ivoire, Rwanda, Liberia and counting.
                                                    </p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="b"> What is the mission of the Open Source Community?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Our mission is to build more women OSS contributors & create more diversity in the African open source ecosystem!</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="c"> Can I register for all events and challenges for free?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="c">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Yes, all our events and programs are for free. Visit our events page to see our upcoming events and challenges. You can also find information on all our social media platforms.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="d"> How can register for a challenge?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="d">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Create an account with us, go to our events page to see the open challenges, register for one of your choosing and start contributing!.</p>
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
                                        <ContextAwareToggle eventKey="a">Is She Code Africa a not-for-profit organisation?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        Yes, She Code Africa is a not-for-profit organisation. We do not earn profits for ourselves. All of the money earned by or donated to the community is used in pursuing the organization's objectives and keeping it running.
                                                    </p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="b"> What gifts can I get?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>You can pick a limited edition T-shirt or plant a tree. You can also get other awesome prizes and gift cards.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="c"> Can I get a prize for just participating?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="c">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>You will get a gift for finishing and winning in any of our challenges. The more you contibute to open source, the more prizes you win.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="d"> How do I get my prizes?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="d">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Your physical prizes will be delivered to your doorsteps. Giftcards or vouchers will be delivered to your registered email address!.</p>
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