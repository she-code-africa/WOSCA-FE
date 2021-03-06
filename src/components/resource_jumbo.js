import React from 'react';
import '../styles/views/resources.css';
import r1 from '../assets/images/resources_1.png';
import r2 from '../assets/images/resources_2.png';
import r3 from '../assets/images/resources_3.png';
import r4 from '../assets/images/resources_4.png';
import r5 from '../assets/images/resources_5.png';

const Jumbo = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <div className="row">
                    <div className="col rr">
                        <img src={r1} alt=".." className="resources_card r_left" />
                    </div>
                    <div className="col-md-7">
                        <h1>All Resources</h1>
                        <p className="lead">Get free access to resources and mentors that will help kickstart your journey to world-known contributor. Build allies to drive gender diversity within the open-source ecosystem.</p>
                        <div className="row rr">
                            <div className="col">
                                <img src={r2} alt=".." className="resources_card r_right" />
                            </div>
                            <div className="col">
                                <img src={r3} alt=".." className="resources_card r_mid" />
                            </div>
                            <div className="col">
                                <img src={r4} alt=".." className="resources_card r_left" />
                            </div>
                        </div>
                    </div>
                    <div className="col rr">
                        <img src={r5} alt=".." className="resources_card r_right" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbo;