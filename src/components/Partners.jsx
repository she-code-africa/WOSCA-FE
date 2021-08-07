import React from 'react';
import Busha from '../assets/images/Busha-Logo.png'
import Cowrywise from '../assets/images/Cowrywise-Logo.png'
import Flutterwave from '../assets/images/Flutterwave-Logo.png'
import Flipay from '../assets/images/Fliqpay-Logo.png'
import Decagon from '../assets/images/Decagon-Logo.png'

const Partners = () => {
    return (
        <>
        <div className="">
           <div className="text-box jumbo-text">
           <span className="sub-text">OUR PARTNERS</span>
            <div className="heading">
            <p className="heading-primary-sub">
            Support open source and pick a limited edition T-shirt or plant a tree. SCA Open source challenge 2020 has ended. Keep contributing to open source & we'll see you next year!
            </p>
            </div>
          </div> 
        </div>
          <div className="partner-cards">
            <div className="partner-card">
                <img src={Busha}/>
            </div>
            <div className="partner-card">
                <img src={Cowrywise}/>
            </div>
            <div className="partner-card">
                <img src={Flutterwave}/>
            </div>
            <div className="partner-card">
                <img src={Flipay}/>
            </div>
            <div className="partner-card">
                <img src={Decagon}/>
            </div>
          </div>
        </>
    )
}

export default Partners
