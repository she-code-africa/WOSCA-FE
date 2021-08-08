import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Subscribe from '../../components/subscribe';
import Card from '../../components/eventcard';
import woman from '../../assets/images/eventwoman.png';
import man from '../../assets/images/eventman.png';
import '../../styles/views/event.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './resourcesStyle.css'

const Resources = () => {
 
  return (
    <main>
      <Header />
      <div className="container">
        <div className="jumbotron">
          <div className="">
            <div className="">
              <h1>All Resources</h1>
              <p className="w-6-12 sec-text"> Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source &amp; we'll see you next year!</p>
            </div>
          </div>
        </div>
        
        <Subscribe />
      </div>
      <Footer />
    </main>
  )
}

export default Resources;