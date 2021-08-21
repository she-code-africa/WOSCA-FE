import React from 'react';
import slack from '../assets/images/Slack.png'

const Slack = () => {
  return (
    <div className="row hrs aic">
      <div className="col slack">
        <span className="sub-text">DISCUSSION</span>
        <div className="heading">
          <h2 className="heading-primary slack_">
            Join our conversation on Slack
          </h2>
          <p className="heading-sub">
            Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!
          </p>
          <div className="sub-div">
            <button className="btn-sub btn-heading-sub">Join conversation</button>
          </div>
        </div>
      </div>
      <div className="col-md-7  np">
        <img src={slack} alt=".." className="slack-img" />
      </div>
    </div>


  )
}

export default Slack
