import React from "react";
import Logo from "../../assets/images/she-code-africa-logo.svg";
import {Card, BigCard} from "../../components/Card";
import Table from "../../components/Table"
import {AiOutlineLink} from 'react-icons/ai'
import {BsCheckAll, BsArrowRight} from 'react-icons/bs'

function Dashboard() {
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
            <BigCard title="New" subtitle="Contributions" button={<button>Submit New Pull Request <div className="card-btn-icon"><BsArrowRight/></div></button>}/>

            {/* <BigCard/> */}
            <Card title="Total Contributions" value="345" icon={<AiOutlineLink color={'#fff'} />}/>
            <Card title="Accepted Contributions" value="345" icon={<BsCheckAll color={'#fff'} />}/>
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