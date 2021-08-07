import React from 'react';
import shirt from '../assets/images/t-shirt.png'

const Rewards = () => {
    return (
        <div className="rewards-container">
           <div className="jumbo-text rewards-text">
           <span className="sub-text">WHAT I STAND TO GAIN</span>
            <div className="heading">
            <h2 className="heading-primary reward-heading"> 
              What do you stand to gain when you contribute your quote.
            </h2>
            </div>
          </div> 
          <div className="rewards">
            <div className="reward-1">
                <img src={shirt} alt="t-shirt"/>
                <p className="heading">T-Shirt and Swags</p>
                <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!</p>
            </div>
            <div className="reward-2">
                <p className="heading">Contributions</p>
                <p>Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!</p>
            </div>
          </div>
        </div>
    )
}

export default Rewards
