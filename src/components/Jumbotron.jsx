import React from 'react';
import lady from '../assets/images/home_woman.png'


const Jumbotron = () => {
  return (
    <div className="row">
      <div className="col"> 
        <span className="sub-text">GET THE BALL ROLLING</span>
        <div className="heading">
          <h1 className="heading-primary">
            <span className="heading-main">
              Open Source Projects Rewarded Heavily
            </span>
          </h1>
          <p className="heading-sub">
          Support open source and win cool prizes while helping us create more gender diversity and inclusion of African women within the open-source ecosystem.
          </p>
        </div>
        {/* <form className="homeform_">
          <div className="sub-div">
            <input className="input-init" placeholder="Enter Email Address" />
            <button className="btn-sub btn-heading-sub">SUBSCRIBE</button>
          </div>
        </form> */}
      </div>
      <div className="col home_woman">
        <img src={lady} alt=".." className="" />
      </div>
    </div>
  )
}

export default Jumbotron
