import React from 'react';
import CDF from '../assets/images/cdfoundation.png'
import CB from '../assets/images/cloudbees.png'
import DH from '../assets/images/deployhub.png'
import TAC from '../assets/images/theatcompany.png'

const Partners = () => {
    return (

        <div className="row hrs">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <span className="sub-text">OUR PARTNERS</span>
                    <div className="heading">
                        <p className="heading-sub">
                        Our sponsors are organizations with interests in the African tech ecosystem and gender diversity, willing to pave the way by helping cover costs involved in running our programs.
                        </p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="partner-cards">
                <div className="partner-card">
                    <img alt="..." src={CDF} />
                </div>
                <div className="partner-card">
                    <img alt="..." src={DH} />
                </div>
                <div className="partner-card">
                    <img alt="..." src={TAC} />
                </div>
                <div className="partner-card">
                    <img alt="..." src={CB} />
                </div>
                <div className="partner-card">
                    <img alt="..." src={DH} />
                </div>
            </div>

        </div>

    )
}

export default Partners
