import React, { useContext } from 'react';
import Header from '../../components/header';
// import Subscribe from '../../components/subscribe';
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
                        <div className="col-md-9"> <h1 >Program Overview</h1></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-8">
                            <p className="lead">
                                During the 8 weeks Bootcamp, participants work with an open source organisation on a project with the help of organisation mentors and get rewarded at the end of the Bootcamp upon successful project completion.
                            </p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="faqs offset-md-1 col-md-10 offset-sm-1 col-sm-10">
                            <h5>Overview of the Bootcamp</h5>
                            <Accordion defaultActiveKey="a">
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="a"> The goal of this Bootcamp is to give African ladies:</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">

                                                    <ul>
                                                        <li>
                                                            hands-on experience collaborating and contributing to open source projects
                                                        </li>
                                                        <li>
                                                            dedicated mentorship from experts in the field.
                                                        </li>
                                                        <li>
                                                            For new contributors, an “onboard” experience to OSS contributions
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        As well as giving participating organizations, a wider platform to:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            engage with more stakeholders/contributors within the open-source ecosystem in Africa
                                                        </li>
                                                        <li>
                                                            Contribute to creating more gender diversity and inclusion
                                                        </li>
                                                        <li>
                                                            She Code Africa is a community that is focused on celebrating and technically empowering young girls and women in technology across Africa. Our community consists of over 3000 members with active members across Nigeria, Ghana, Kenya, Zimbabwe, Uganda, South Africa, Cameroon, Cote D'Ivoire, Rwanda, Liberia and counting.
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        During the program, participants spend 2 months working closely with an organisation involved in open source. They bring their expertise to the open-source project and at the same time learn about the open-source project and new technologies.
                                                    </p>
                                                    <p>
                                                        The mentor open-source organizations work with the participants to complete selected projects.
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
                                        <ContextAwareToggle eventKey="b"> How does it work?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Here's the high-level workflow of the Bootcamp:</p>
                                                    <ul>
                                                        <li>
                                                            Open source organizations accept invites to be mentor organizations in the Open Source Bootcamp. They submit a list of project ideas, project requirements and a maximum number of participants they can mentor on submitted project(s).
                                                        </li>
                                                        <li>
                                                            Applicants submit their applications via She Code Africa (SCA), showing proof of program general minimum requirements, mentor OS organizations’ requirements and relevant experience to participate in the boot camp.
                                                        </li>
                                                        <li>
                                                            Accepted participants are selected and assigned projects based on their skill set match with the Open source organizations’ requirements.
                                                        </li>
                                                        <li>
                                                            The accepted participants spend 2 months working with mentors from the open-source organizations to complete their projects.
                                                        </li>
                                                        <li>
                                                            At the end of the program, Mentors/participants submit reports to evaluate the success of the project.
                                                        </li>
                                                        <li>
                                                            SCA announces successful projects and participants and awards the participants.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>

                            <h5>Program Timeline</h5>
                            <Accordion defaultActiveKey="a">
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="a">The timeline and details on the steps involved and the key dates are:</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-11">
                                                    <iframe src="https://docs.google.com/spreadsheets/d/1Bkvsd6hoAamrkOUMHrJA8VB-tyVfCVhY8bU9TN8SfA8?gid=0&amp;single=true&amp;widget=true&amp;headers=false" title='ContibuthonTimeline'>
                                                    </iframe>

                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />

                            </Accordion>
                        </div>
                    </div>

                </div>

                {/* <Subscribe /> */}
                <div className="jumbotron"></div>
                {/* Remove when subscribe returns */}
            </div>
            <Footer />


        </React.Fragment>


    )
}

export default FAQ;