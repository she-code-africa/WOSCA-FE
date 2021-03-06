import React from "react";
import Header from '../../components/dash-header';
import { Card, BigCard } from "../../components/Card";
import Table from "../../components/Table"
import { AiOutlineLink } from 'react-icons/ai'
import { BsCheckAll, BsArrowRight } from 'react-icons/bs'
import { useUserContext } from "../../context/AuthContext"

function Dashboard() {
  const colunms = ["Date", "Contribution Link", "Status"]

  const { user } = useUserContext()
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="">
          <div className="dashboard-body">
            <div className="greeting"> <p className="greeting-text">Good Morning, {user?.username}</p></div>
            <div className="contribution-cards">
              <BigCard title="New" subtitle="Contributions" button={<button>Submit New Pull Request <div className="card-btn-icon"><BsArrowRight /></div></button>} />

              <Card title="Total Contributions" value="345" icon={<AiOutlineLink color={'#fff'} />} />
              <Card title="Accepted Contributions" value="345" icon={<BsCheckAll color={'#fff'} />} />
            </div>
            <div className="greeting">
              <p className="greeting-text">Your Submissions</p>
              <Table colunms={colunms} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;