import React from 'react';
import slack from '../assets/images/Slack.png'

const Slack = () => {
    return (
        <div className="jumbo">
           <div className="jumbo-text slack">
           <span className="sub-text">DISCUSSION</span>
            <div className="heading">
            <h1 className="heading-primary">
              <span className="heading-primary-main">
              Join our conversation on Slack
              </span>
            </h1>
            <p className="heading-primary-sub">
            Support open source and pick a limited edition T-shirt or plant a tree. SCA Open source challenge 2020 has ended. Keep contributing to open source & we'll see you next year!
            </p>
            </div>
            <form>
              <div className="sub-div">
            <button className="btn-sub">Join conversation</button>
              </div>
          </form>
          </div> 
          <div>
            <img src={slack} alt=".." className="slack-img"/>
          </div>
        </div>
    )
}

export default Slack
