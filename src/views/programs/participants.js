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

function Part() {
    return (
        <React.Fragment>
            <Header />
            <div className="">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-9"> <h2>Participants</h2></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-9">
                            <p className="lead">Participants are women software developers, designers, technical writers etc within Africa who are accepted to take part in the Bootcamp. <br /> The following are the guide for participants of Contributhon by She Code Africa.</p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="faqs offset-md-1 col-md-10 offset-sm-1 col-sm-10">
                            <Accordion defaultActiveKey="a">
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="a">Minimum She Code Africa (SCA) Eligibility criteria to participate in Contributhon</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>To participate in Contributhon, you must be:</p>
                                                    <ul className='ac_list'>
                                                        <li>
                                                            Be able to demonstrate prior experience and background knowledge in field of interest by submitting role descriptions and work samples.
                                                        </li>
                                                        <li>
                                                            A female who resides in Africa.
                                                        </li>
                                                        <li>
                                                            Willing to commit at least an 5 hours a day to program activities
                                                        </li>
                                                        <li>
                                                            Not have participated in previous cohorts of this program
                                                        </li>
                                                    </ul>
                                                    <em>
                                                        Please note that the criteria listed above are the minimum requirements from SCA and does not include mentor organizations’ requirements which will be taken into consideration when selecting participants.
                                                    </em>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="b" className="partStyle"> What does the Participant Benefits?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <ul className='ac_list'>
                                                        <li>
                                                            Opportunity to improve technical skills
                                                        </li>
                                                        <li>
                                                            Opportunity to get hands-on experience with dedicated mentoring in OS development & Contribution
                                                        </li>
                                                        <li>
                                                            A $500 dollar stipend to help cover expenses.
                                                        </li>
                                                        <li>
                                                            Gain referrals from participating mentor organization
                                                        </li>
                                                        <li>
                                                            Build career potentials within the field
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="d"> Participant Application Phase</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="d">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        The application phase is expected to run from February 21, 2022 - March 11, 2022. During this period, you can apply to take part in the Bootcamp. The SCA program administrators then review your application and forward to an open-source organization with projects that match your skill set and experience for review and selection of successful participants.
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
                                        <ContextAwareToggle eventKey="e"> Creating Your Application</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="e">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        An application form will be made available during the application period.
                                                    </p>
                                                    <p>
                                                        After submitting the form, you can continue updating the information on the form until the end of the application period (March 11, 2022).
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
                                        <ContextAwareToggle eventKey="f"> Participant Responsibilities During the Bootcamp</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="f">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>Participants responsibilities during the bootcamp includes the following:</p>
                                                    <ul className='ac_list'>
                                                        <li>
                                                            Submit high-quality work.
                                                        </li>
                                                        <li>
                                                            Regularly communicate the work you have completed with your team/mentor, what you intend to do next, and any blockers you encounter.
                                                        </li>
                                                        <ul>
                                                            <li>
                                                                Ask for help when something is preventing you from achieving a goal.
                                                            </li>
                                                            <li>
                                                                Give some indication that you are working daily or at the agreed intervals.
                                                            </li>
                                                        </ul>
                                                        <li>
                                                            Re-evaluate work scope when significantly ahead of or behind expectations.
                                                        </li>
                                                        <li>
                                                            Communicate with your mentor and the broader community.
                                                        </li>
                                                        <li>
                                                            Inform as early as possible when work capacity will be reduced (for example, due to family commitments, health, other work commitments).
                                                        </li>
                                                        <li>
                                                            Listen and respond to feedback.
                                                        </li>
                                                        <li>
                                                            Submit your project report and evaluation within the stipulated time frame.
                                                        </li>
                                                        <li>
                                                            Let the program administrators know of any bugs or communication problems.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="g"> Creating Your Project Report</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="g">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>In the last week of the Bootcamp, you will be required to submit your project report by completing <a href='/contributhon/report' target='_blank' rel='noreferrer'>this form.</a></p>
                                                    <p>
                                                        Project Report Details:
                                                    </p>
                                                    <p>Provide a link to the description of the work done (i.e blogpost). It should contain the following details:</p>
                                                    <ul className='ac_list'>
                                                        <li>
                                                            A summary of work done during the boot camp (Including links to pull requests, documentation, e.t.c)
                                                        </li>
                                                        <li>
                                                            Challenges faced
                                                        </li>
                                                        <li>
                                                            Experience gained
                                                        </li>
                                                        <li>
                                                            Improvement Suggestions
                                                        </li>
                                                        <li>
                                                            Next Steps
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="h"> Writing Your Evaluation</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="h">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        In the last week of the Bootcamp, the participants evaluate their experiences with their mentors, their projects, and their overall participation in the Bootcamp.
                                                    </p>
                                                    <p>
                                                        The evaluation provides a way for you to share information with SCA program administrators. It's also a way for you to compose your own thoughts and takeaways from your participation in the Bootcamp.
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
                                        <ContextAwareToggle eventKey="i"> Submitting Your Evaluation</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="i">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        When the participant evaluation phase opens, you will be able to submit your evaluation by completing <a href="/contributhon/evaluation" target="_blank" rel="noreferrer">this form</a>.
                                                    </p>
                                                    <p>Failure to submit a Project Report or an Evaluation of Success and Experience would mean that the participant did not successfully complete the boot camp and would not be awarded.</p>
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

                {/* <Subscribe /> */}

            </div>
            <Footer />
        </React.Fragment >
    )
}

export default Part;