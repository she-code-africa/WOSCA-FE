import React from 'react';
import { AiOutlineLink } from 'react-icons/ai'
import { BsCheckAll } from 'react-icons/bs'
import { Card } from "../../components/Card";

function Dashboard() {
    return (
        <React.Fragment>
            <div className="admin-greeting"> <p>Welcome Here, Lola</p></div>
            <div className="contribution-cards admin-cards">
                <Card title="Total Contributions" value="345" icon={<AiOutlineLink color={'#fff'} />} />
                <Card title="Total Submitted PRs" value="345" icon={<AiOutlineLink color={'#fff'} />} />
                <Card title="Accepted Contributions" value="345" icon={<BsCheckAll color={'#fff'} />} />
            </div>
        </React.Fragment >
    );
}

export default Dashboard;