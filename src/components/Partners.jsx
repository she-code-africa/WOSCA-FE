import React from 'react';
import Busha from '../assets/images/Busha-Logo.png'
import Cowrywise from '../assets/images/Cowrywise-Logo.png'
import Flutterwave from '../assets/images/Flutterwave-Logo.png'
import Flipay from '../assets/images/Fliqpay-Logo.png'
import Decagon from '../assets/images/Decagon-Logo.png'

const Partners = () => {
    return (

        <div className="row hrs">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <span className="sub-text">OUR PARTNERS</span>
                    <div className="heading">
                        <p className="heading-sub">
                            Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we’ll see you next year!
                        </p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="partner-cards">
            <div className="partner-card">
                <img alt="..." src={Busha} />
            </div>
            <div className="partner-card">
                <img alt="..." src={Cowrywise} />
            </div>
            <div className="partner-card">
                <img alt="..." src={Flutterwave} />
            </div>
            <div className="partner-card">
                <img alt="..." src={Flipay} />
            </div>
            <div className="partner-card">
                <img alt="..." src={Decagon} />
            </div>
            </div>
            
        </div>

    )
}

export default Partners
