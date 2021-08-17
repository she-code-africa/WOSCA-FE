import React from 'react';
import lady from '../assets/images/home_woman.png'


const homepage = {
  margin: "100px 70px 50px"
}
const homeform = {
  padding: "20px 0px"
}

const Jumbotron = () => {
  return (
    <div className="row" style={homepage}>
      <div className="col">
        <span className="sub-text">GET THE BALL ROLLING</span>
        <div className="heading">
          <h1 className="heading-primary">
            <span className="heading-main">
              Open Source Projects Rewarded heavily
            </span>
          </h1>
          <p className="heading-sub">
            Support open source and pick a limited edition T-shirt or plant a tree. SCA Open source challenge 2020 has ended. Keep contributing to open source & we'll see you next year!
          </p>
        </div>
        <form style={homeform}>
          <div className="sub-div">
            <input className="input-init form-control" placeholder="Enter Email Address" />
            <button className="btn-sub btn-heading-sub">SUBSCRIBE</button>
          </div>
        </form>
      </div>
      <div className="col home_woman">
        <img src={lady} alt=".." className="" />
      </div>
    </div>
  )
}

export default Jumbotron
