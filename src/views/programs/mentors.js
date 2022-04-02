import React, { useContext } from 'react';
import Header from '../../components/header';
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

function Mentor() {
    return (
        <React.Fragment>
            <Header />
            <div className="">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-9"> <h3 >Mentor Organizations</h3></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-9">
                            <p className="lead">These are participating open-source organizations which participants will work directly with during the Bootcamp. Mentor organizations are also program sponsors who indicate interest to participate as mentor organizations during the program.</p>
                            <p className="lead">However, in the event that funds contributed by sponsors is in excess and can pay more participants than sponsors are willing to mentor. She Code Africa (SCA) may choose to make a call for other mentor organizations who will not be required to sponsor</p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="faqs offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                            <Accordion defaultActiveKey="a">
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="a">Mentor Organizations: Organization Administrators </ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>These are members of the participating open source organizations who act as the Principal Contributhon contact for their organization:</p>
                                                    <p>Their responsibilities include:</p>
                                                    <ul className='ac_list'>
                                                        <li>
                                                            Accept the invite to take part in Contributhon.
                                                        </li>
                                                        <li>
                                                            Submit the project details and requirements (Beginner, Intermediate or Advanced). See Mentor Organizations' Projects below for more information on project details.
                                                        </li>
                                                        <li>
                                                            Manage the mentors within their organizations
                                                        </li>
                                                        <li>
                                                            Make sure the projects stay on track
                                                        </li>
                                                        <li>
                                                            Serve as communication liaison with SCA:
                                                            <ul>
                                                                <li>
                                                                    Respond to any inquiries from SCA within 48 hours
                                                                </li>
                                                                <li>
                                                                    Report violations of the Participant Agreement (for example, harassment, plagiarism, fraud)
                                                                </li>
                                                                <li>
                                                                    Report the withdrawal of a participant
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            Ensure all deadlines are met by the participating organisation (e.g evaluation of mentors by mentees)
                                                        </li>
                                                        <li>
                                                            Select and invite trusted, capable, and qualified mentors from organisation
                                                        </li>
                                                        <li>
                                                            Communicate organization-specific requirements to the participants (e.g project guidelines, communication, licensing etc)
                                                        </li>
                                                        <li>
                                                            Communicate organization-specific expectations to the participants (e.g behaviour, best practices, visibility)
                                                        </li>
                                                        <li>
                                                            Communicate deadlines, acceptance criteria, and failure/dismissal policy
                                                        </li>
                                                        <li>
                                                            Monitor communications and ensure inappropriate behaviour is addressed
                                                        </li>
                                                        <li>
                                                            Ensure participants at risk of failure or dismissal are notified in advance
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
                                        <ContextAwareToggle eventKey="z">Mentor Organizations: Open Source Mentors: </ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="z">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>These are members of the participating open source organizations who are accepted as mentors for the Bootcamp.</p>
                                                    <p>Their responsibilities include:</p>
                                                    <ul className='ac_list'>
                                                        <li>
                                                            Work closely with the participants to help ensure a successful project.
                                                        </li>
                                                        <li>
                                                            Inform org admin when there is an issue with a participants, including:
                                                            <ul>
                                                                <li>
                                                                    Lacking communication, activity, visibility, or progress
                                                                </li>
                                                                <li>
                                                                    Participant Agreement violations (for example, plagiarism, harassment, fraud)
                                                                </li>
                                                                <li>
                                                                    Bad fit for the project, or stepping down
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            Submit Evaluation to success report to ascertain the success of the project. See <a href='/'>project evaluation for more details</a>  on the information required in the project evaluation.
                                                        </li>
                                                        <li>
                                                            Communicate availability and interaction expectations to the participants
                                                        </li>
                                                        <li>
                                                            Help and/or teach participants how to:
                                                            <ul>
                                                                <li>
                                                                    be a part of your community                                                                   </li>
                                                                <li>
                                                                    communicate more effectively and in the open
                                                                </li>
                                                                <li>
                                                                    work with your organization’s preferred communication channel (IRC, Slack, etc)
                                                                </li>
                                                                <li>
                                                                    use your organization’s version control system
                                                                </li>
                                                                <li>
                                                                    ask good questions and get answers to their questions
                                                                </li>
                                                                <li>
                                                                    provide convincing technical argument and constructive discussion
                                                                </li>
                                                                <li>
                                                                    be independently motivated and productive
                                                                </li>
                                                                <li>
                                                                    solve difficult technical problems
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            Keep track of their progress, keep participants informed about their status
                                                        </li>
                                                        <li>
                                                            Communicate on a regular basis. Have regular communication at least twice a week
                                                        </li>
                                                        <li>
                                                            Give constructive feedback, be patient, and be respectful
                                                        </li>
                                                        <li>
                                                            Establish realistic work objectives and timeline expectations
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
                                        <ContextAwareToggle eventKey="b">Mentor Organization Benefits</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <ul className='ac_list'>
                                                        <li>
                                                            Opportunity to engage more with the open-source ecosystem in Africa and build more diversity.
                                                        </li>
                                                        <li>
                                                            Gain more contributors and expand its OS activity reach/community into the African tech ecosystem.
                                                        </li>
                                                        <li>
                                                            Opportunity to welcome enthusiastic members into your community with fresh ideas/innovations
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
                                        <ContextAwareToggle eventKey="d"> Mentor Organization Eligibility</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="d">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        Mentor organizations must:
                                                    </p>
                                                    <ul className='ac_list'>
                                                        <li>
                                                            Run an active open source or free software project.
                                                        </li>
                                                        <li>
                                                            Have produced and released software under an <a href='https://opensource.org/licenses'>OSI approved license</a>.
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
                                        <ContextAwareToggle eventKey="e"> Mentor Organizations’ Project</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="e">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        These are projects suggested or listed by participating mentor open-source organizations for participants to complete with the help of a mentor during Bootcamp.
                                                    </p>
                                                    <p>Mentor Organizations will be required to <a href='https://docs.google.com/forms/d/e/1FAIpQLSfP9cCByuSLJ_-UqiyZmPOjxvWc2R1mYFpuBmYEjcllxW2ELA/viewform' target='_blank' rel='noreferrer'>fill a form</a> with project details and requirements, which will be used as a criterion for the selection process.</p>
                                                    <p>
                                                        Mentor organizations are typically advised to focus on one or two projects, however, if an organization has the capacity to mentor on more than two projects, then there’s the liberty to submit more. For each project, there's a need for at least one mentor who is committed to work as a mentor specifically for that project.
                                                    </p>
                                                    <p>
                                                        Submitted projects should be projects that can be completed within the Bootcamp based on the provided skills and proficiency level of the participants.
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
                                        <ContextAwareToggle eventKey="f"> Mentors’ Evaluation of Participants</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="f">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>During the last week of the Bootcamp, mentors would be required to evaluate the participants’ projects, their experiences with the participants, and their overall performance and participation in the Open Source Bootcamp.</p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <hr />
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="g"> Submitting Your Evaluation</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="g">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        When the mentor evaluation phase opens, you will be able to submit your evaluation by completing a form that will be provided.
                                                    </p>
                                                    <em>
                                                        Successful project completion is dependent on Mentor’s Evaluation of Participants.
                                                    </em>
                                                    <em>
                                                        Failure to submit Mentors’ Evaluation of Success and Experience would mean that participants did not successfully complete the boot camp and would not be awarded.
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
                                        <ContextAwareToggle eventKey="h">Are Mentor organizations also Sponsors?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="h">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        Yes. Mentor Organization are also Program Sponsor Organizations who have indicated interests to also participate as Mentor Organizations. However, in the event that funds contributed by program sponsors are in excess. SCA may choose to make a call for other mentor organizations who will not be required to sponsor.
                                                    </p>

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

export default Mentor;