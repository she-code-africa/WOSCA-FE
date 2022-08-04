import React, { Component } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';
import { Card } from "../../components/Card";
import { UserContext } from "../../context/AuthContext";
import { prs } from "./adminService";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pr: 1,
            total_users: 2,
            total_events: 3,
        };
    }

    render() {
        const { token, user } = this.context
        return (
            <React.Fragment>
                <div className="admin-greeting"> <p>Welcome Here, {user?.username}</p></div>
                <div className="contribution-cards admin-cards">
                    <Card title="Total Users" value={this.state.total_users} icon={<AiOutlineLink color={'#fff'} />} />
                    <Card title="Total Submitted PRs" value={this.state.pr} icon={<AiOutlineLink color={'#fff'} />} />
                    <Card title="Accepted Contributions" value={this.state.total_events} icon={<BsCheckAll color={'#fff'} />} />
                </div>
            </React.Fragment >
        );
    }

    async componentDidMount() {
        var au = this.context.user;
        if (!au) {
            window.location.replace('/signin')
        } else if (au.role !== 'admin') {
            window.location.replace('/dashboard')
        } else {
            // find totalcontributions
            // find PRS
            await prs()
                .then((response) => {
                    var count = response.data.data.pullRequests.length
                    this.setState({ pr: count })
                })
                .catch((error) => {
                    console.log(error)
                    // alert.error(error)
                })
            // find acceptedcontributions
        }
    }
}
Dashboard.contextType = UserContext
export default Dashboard;