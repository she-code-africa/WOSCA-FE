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
          Be a part of women software developers, designers, technical writers within Africa that support open source. Join our community to get updates on upcoming initiatives.
          </p>
          <div className="sub-div">
            <a href="http://bit.ly/scaslacksignup"><button className="btn-sub btn-heading-sub">Join Conversation</button></a>
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
