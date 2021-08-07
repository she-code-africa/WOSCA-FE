import React from 'react';
import lady from '../assets/images/home_woman.png';
import woman from '../assets/images/eventwoman.png';
import man from '../assets/images/eventman.png';

const Jumbotron = () => {
    return (
        <div className="jumbo">
           <div className="text-box jumbo-text">
           <div className="">
             <div className="">   
                <img src={woman} alt="..." className="first-woman" />
                <img src={woman} alt="..." className="third-woman" />
              </div>
                <div className="">                     
                 <h1>What do you stand to gain when I join You</h1>
                 <p className="">Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!</p>
               </div>
              <div className="">
                <img src={man} alt="..." className="second-woman"/>
                <img src={man} alt="..."  className="man"/>
               </div>
           </div>
          </div> 
        </div>
    )
}

export default Jumbotron
