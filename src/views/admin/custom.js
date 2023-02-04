import React, { Component } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';
import { Card } from "../../components/Card";
import { UserContext } from "../../context/AuthContext";
import { prs, _all_events, _all_users } from "./adminService";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pr: 0,
            total_users: 0,
            total_events: 0,
            accpeted_pr: 0,
        };
    }

    render() {
        const { user } = this.context
        return (
            <React.Fragment>
                <div className="admin-greeting"> <p>Welcome Here, {user?.username}</p></div>
                <div className="contribution-cards admin-cards">
                    <Card title="Total Users" value={this.state.total_users} icon={<AiOutlineLink color={'#fff'} />} />
                    <Card title="Total Submitted PRs" value={this.state.pr} icon={<AiOutlineLink color={'#fff'} />} />
                    <Card title="Accepted Contributions" value={this.state.accpeted_pr} icon={<BsCheckAll color={'#fff'} />} />
                    <Card title="Total Events" value={this.state.total_events} icon={<BsCheckAll color={'#fff'} />} />
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
            await prs()
                .then((response) => {
                    var resp = (response.data.data[0].data)
                    var count = resp.length
                    this.setState({ pr: count })
                    let accept = 0
                    for(let i=0; i<count; i++) {
                        if (resp[i]["status"] === "accepted") {
                            accept += 1
                        }
                    }
                    this.setState({ accpeted_pr: accept })
                })
                .catch((error) => {
                    alert.error(error)
                })
                _all_events ()
                .then((respp) => {
                    var counte = (respp.data.data[0].data.length)
                    this.setState({ total_events: counte })
                })
                _all_users()
                .then((resppp) => {
                    var counte = (resppp.data.data[0].data.length)
                    this.setState({ total_users: counte })
                })
        }
    }
}
Dashboard.contextType = UserContext
export default Dashboard;