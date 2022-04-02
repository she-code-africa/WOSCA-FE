import React from 'react';

const Jumb = () => {
    return (
        <div className="row hrs">
            <div className="col">
                <div className="row">
                    <div className="col-md-8">
                        <span className="sub-text">WORK ON A PROJECT</span>
                        <div className="heading">
                            <h2 className="heading-primary rewards_">
                                Join the Bootcamp.
                            </h2>
                            <p className="heading-sub">
                                In this Bootcamp, participants work with an open source organisation on a project for 8 weeks with the help of organisation mentors and get rewarded at the end of the Bootcamp upon successful project completion.
                            </p>
                            <p className="sub-div">
                                <a href="/contributhon/participants"><button className="btn-sub btn-heading-sub">Get Started</button></a>
                            </p>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <div className="reward-1">
                            <p className="heading">Be a Mentor</p>
                            <p>Mentor Organizations are participating open-source organizations which participants will work directly with during the Bootcamp. Mentor organizations are also program sponsors who indicate interest to participate as mentor organizations during the program.</p>
                            <p className="sub-div">
                                <a href="/contributhon/mentors"><button className="btn-sub btn-heading-sub">Read More</button></a>
                            </p>
                        </div>
                    </div>
                    <div className="col reward-2s">
                        <div className="reward-2">
                            <p className="heading">Be a Sponsor</p>
                            <p>Sponsors are organizations or individuals with interests in the African tech ecosystem and gender diversity, willing to pave the way by helping cover costs involved in running the Bootcamp.</p>
                            <p className="sub-div">
                                <a href="/contributhon/sponsors"><button className="btn-sub btn-heading-sub">Find out More</button></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumb
