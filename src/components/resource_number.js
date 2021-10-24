import React from 'react';
import n1 from '../assets/images/01.svg';
import n2 from '../assets/images/02.svg';
import n3 from '../assets/images/03.svg';

const Number = () => {
    return (
        <div className="container">
            <div className="row rn">
                <div className="col-md-2 r_no">
                    <img src={n1} alt=".." />
                </div>
                <div className="col">
                    <p className="resource_lead">
                        To be able to participate in our challenges, you have to be a female who resides in Africa. You must be able to demonstrate prior experience and background knowledge in field of interest by submitting role descriptions and work samples. No prior experience or knowledge? Don't worry. Sign up for our events and learn with us.
                    </p>
                </div>
            </div>
            <div className="row rn">
                <div className="col-md-2 r_no">
                    <img src={n2} alt=".." />
                </div>
                <div className="col">
                    <p className="resource_lead">
                        Register for challenges and get matched with mentor organizations. Get the oppourtunity to improve your tehnical skills while getting hands-on experience with your dedicated mentor(s). You can also gain referrals from participating mentor organizations and build your career potentials within the field.
                    </p>
                </div>
            </div>
            <div className="row rn">
                <div className="col-md-2 r_no">
                    <img src={n3} alt=".." />
                </div>
                <div className="col">
                    <p className="resource_lead">
                        While in the program, you're expected to submit high-quality work and regularly communicate with your mentor and the broader community, listen and respond to feedback, submit your project report and evaluation within the stipulated time frame, and re-evaluate work scope when significantly ahead of or behind expectations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Number;