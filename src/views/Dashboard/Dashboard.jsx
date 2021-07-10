import React, { useState } from "react";
import Logo from "../../assets/images/she-code-africa-logo.svg";
import {Card, BigCard} from "../../components/Card";
import Table from "../../components/Table"

function Dashboard({  }) {
  const colunms = ["Date", "Contribution Link", "Status"]
    return (
      <div className="dashboard">
        <div className="">
          <div className="logo-box">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className="dashboard-body">
           <div className="greeting"> <p className="greeting-text">Good Morning, Lola</p></div>
           <div className="contribution-cards">
            <BigCard title="New" subtitle="Contribution"/>

            {/* <BigCard/> */}
            <Card title="Total Contributions" value="345"/>
            <Card title="Accepted Contributions" value="345"/>
           </div>
           <div className="greeting">
            <p className="greeting-text">Your Submissions</p>
            <Table colunms={colunms}/>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;