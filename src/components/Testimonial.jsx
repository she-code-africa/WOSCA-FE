import React from 'react';
import woman from '../assets/images/eventwoman.png';
import man from '../assets/images/eventman.png';
import '../styles/components/testimonial.css';
import woman_down from '../assets/images/testimonial_woman.png';
import woman_right from '../assets/images/testimonial_lady.png';

const Jumbotron = () => {
  return (
    <div className="row hrs">
      <div className="col left_">
        <img src={woman} alt="..." className="left_up" />
        <img src={woman_down} alt="..." className="left_down" />
      </div>
      <div className="col-md-6 test_mid">
        <div className="heading">
          <h2 className="heading-primary rewards_ tac">
            What do you stand to gain when I join You
          </h2>
          <p className="heading-sub tac">
            Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!
          </p>
        </div>

      </div>
      <div className="col right_">
        <img src={woman_right} alt="..." className="right_up" />
        <img src={man} alt="..." className="right_down" />
      </div>
    </div>

  )
}

export default Jumbotron
