import React from 'react';
import lady from '../assets/images/home_woman.png'

const Jumbotron = () => {
    return (
        <div className="jumbo">
           <div className="text-box jumbo-text">
           <span className="sub-text">GET THE BALL ROLLING</span>
            <div className="heading">
            <h1 className="heading-primary">
              <span className="heading-primary-main">
              Open Source Projects Rewarded heavily
              </span>
            </h1>
            <p className="heading-primary-sub">
            Support open source and pick a limited edition T-shirt or plant a tree. SCA Open source challenge 2020 has ended. Keep contributing to open source & we'll see you next year!
            </p>
            </div>
            <form>
              <div className="sub-div">
              <input className="input-init" placeholder="Enter Email Address"/>
            <button className="btn-sub">SUBSCRIBE</button>
              </div>
          </form>
          </div> 
          <div>
            <img src={lady} alt=".." className="home_woman"/>
          </div>
        </div>
    )
}

export default Jumbotron
