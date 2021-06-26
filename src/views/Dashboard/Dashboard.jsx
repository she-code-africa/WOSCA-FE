import React, { useState } from "react";
import Logo from "../../assets/images/she-code-africa-logo.svg";
import {Card, BigCard} from "../../components/Card"

function Dashboard({  }) {
    return (
      <div className="dashboard">
        <div className="">
          <div className="logo-box">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className="dashboard-body">
           <div className=""> <p>Good Morning, Lola</p></div>
           <div className="contribution-cards">
            <BigCard/>
            <Card/>
            <Card/>
           </div>
           
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;