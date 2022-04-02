import React from 'react';
import '../styles/components/testimonial.css';
import woman_down from '../assets/images/testimonial_woman.png';
import woman_right from '../assets/images/testimonial_lady.png';

const Jumbotron = () => {
    return (
        <div className="row hrs">
            <div className="col left_">
                <img src={woman_down} alt="..." className="left_down" />
            </div>
            <div className="col-md-7 test_mid">
                <div className="heading">
                    <h2 className="heading-primary rewards_ tac">
                        An Overview of SCA Contributhon and How it Works
                    </h2>
                    <p className="heading-sub tac">
                        The goal of this Bootcamp is to give African ladies hands-on experience collaborating and contributing to open source projects. During the program, participants spend 2 months working closely with an organisation involved in open source.
                    </p>
                    <p className="heading-sub tac">
                        <a href="/contributhon/overview"><button className="btn-sub btn-heading-sub">Read More</button></a>
                    </p>
                </div>

            </div>
            <div className="col right_">
                <img src={woman_right} alt="..." className="right_up" />
            </div>
        </div>

    )
}

export default Jumbotron
