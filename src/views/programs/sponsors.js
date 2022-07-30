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

function Sponsor() {
    return (
        <React.Fragment>
            <Header />
            <div className="">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-9"> <h3>Sponsors</h3></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-9">
                            <p className="lead">These are organizations or individuals with interests in the African tech ecosystem and gender diversity, willing to pave the way by helping cover costs involved in running the Bootcamp. 
                             </p> 
                            <p className="lead">
                                Sponsors are encouraged to also participate as mentor organizations, however, this is not compulsory. If you would like to participate as a mentor organization, see <a href='/contibuthon/mentors'>the mentor organization section.</a>
                            </p>
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
                                        <ContextAwareToggle eventKey="a">Why Sponsor? </ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        African women are underrepresented in Free and Open Source Software (FOSS) development, even as compared with the number of women studying Computer Science in colleges within Africa and with the number of women employed in proprietary software development. While <a href="https://opensourcesurvey.org/2017/">the 2017 GitHub survey</a> showed that participation of women in FOSS is still extremely low at 3%, the percentage of African women is even lower.
                                                    </p>
                                                    <p>
                                                        he Code Africa has been a major factor in increasing participation of women within Africa in open source communities, you can find some of our past initiatives and success stories <a href='/'>here</a>. It's important that we reach more African women with the information that the Open Source community is (by and large) mature and friendly, and that contributing to Open Source is valuable for both social and professional reasons. In this way, we are growing the community and improving our ability to reach even more people.
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
                                        <ContextAwareToggle eventKey="z">Sponsor Benefits</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="z">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <ul className='ac_list'>
                                                        <li>
                                                            Participate as a mentor organization. See the <a href="/contibuthon/mentors">mentor organization section</a> for benefits of participating as a mentor organization.
                                                        </li>
                                                        <li>
                                                            Opportunity to engage more with stakeholders within the open-source ecosystem in Africa and encourage diversity.
                                                        </li>
                                                        <li>
                                                            Build or create more allies and drive gender diversity within the ecosystem
                                                        </li>
                                                        <li>
                                                            SCA has chapter presence in 5 countries and members in over 20 countries across Africa. Participating as a sponsor gives you the opportunity to identify, connect and build long term commitments/networks with stakeholders in these communities.
                                                        </li>
                                                        <li>
                                                            Opportunity to give back to the open source community by helping create more diversity & newer talents within the ecosystem
                                                        </li>
                                                        <li>
                                                            Work closely with the participants to help ensure a successful project.
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
                                        <ContextAwareToggle eventKey="b">Sponsorship Tiers: Individual ($500)</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        Covers cost of paying a single participant's stipend ($500).
                                                    </p>
                                                    <em>
                                                        Individual sponsors could choose to sponsor more than one participant at the cost of $500 each.
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
                                        <ContextAwareToggle eventKey="d"> Sponsorship Tiers: Corporate ($5000)</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="d">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        Corporate sponsorship levels:
                                                    </p>
                                                    <ul className='ac_list'>
                                                        <li>
                                                            <i>Bronze: $1,001 - $2,000</i>
                                                        </li>
                                                        <li>
                                                            <i>Silver: $2,001 - $3,000</i>
                                                        </li>
                                                        <li>
                                                            <i>Gold: $3,001 - $5,000</i>
                                                        </li>
                                                        <li>
                                                            <i>Platinum: $5,001 or more</i>
                                                        </li>
                                                    </ul>
                                                    <p>Covers costs of:</p>
                                                    <ul className='ac_list'>
                                                        <li>
                                                            paying participants stipend,
                                                        </li>
                                                        <li>
                                                            purchasing laptops for participants
                                                        </li>
                                                        <li>
                                                            program administrative costs which include costs of:
                                                            <ul>
                                                                <li>
                                                                    running video ads and campaigns to promote the program,
                                                                </li>
                                                                <li>
                                                                    internet subscriptions
                                                                </li>
                                                                <li>
                                                                    logistics
                                                                </li>
                                                            </ul>
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
                                        <ContextAwareToggle eventKey="e"> Become a Sponsor</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="e">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        We’re happy to kick off conversations with your organisation, led by our OSS program manager. Kindly <a href="mailto:@zainab@shecodeafrica.org">send an email to Zaynab</a> indicating your interest to sponsor as well as your preferred sponsorship tier and we will follow up!
                                                    </p>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>

                            <h5>Sponsors FAQ</h5>
                            <Accordion defaultActiveKey="a">
                                <Card>
                                    <Card.Header>
                                        <ContextAwareToggle eventKey="a">Are sponsors required to help run the program?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="a">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>
                                                        No. The application process, participant selection, communication with mentors, and payments to participants are all handled by SCA organizers.
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
                                        <ContextAwareToggle eventKey="b"> Who pays the participants?</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="b">
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <p>SCA handles payments to program participants via our verified payment providers</p>
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

export default Sponsor;