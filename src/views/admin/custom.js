import React, { Component } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';
import { Card } from "../../components/Card";
import { UserContext } from "../../context/AuthContext";
import { prs, _all_events, _all_users } from "./adminService";
import Moment from 'moment';
import moment from 'moment';

import {
    Table, TableBody,
    TableContainer,
    TableHead, TableRow, Paper, TableCell
}
    from '@material-ui/core';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pr: 0,
            total_users: 0,
            total_events: 0,
            accpeted_pr: 0,
            events: [],
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
                <div>
                    {/* <h6></h6> */}
                    <div className="admin-greeting"><h4>Recent Events</h4></div>
                    <div className="contribution-cards admin-cards undertable">
                        
                    <TableContainer component={Paper} className="tableContainer">
                        <Table className="table" aria-label="simple table">
                            <TableHead className="tableheader">
                                <TableRow>
                                    <TableCell className="tableHeaderCell" cell>S/N</TableCell>
                                    <TableCell className="tableHeaderCell">Event Name</TableCell>
                                    <TableCell className="tableHeaderCell">Location</TableCell>
                                    <TableCell className="tableHeaderCell">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell colSpan={4}></TableCell>
                                </TableRow>
                                { this.state.events.length === 0 ?
                                    (<TableRow >
                                        <TableCell colSpan={4} className='errorMessage'>Could not load table data</TableCell>
                                    </TableRow>) : 

                                this.state.events.map((row) => (
                                    <TableRow
                                    key={row.id}
                                    className="tableRow"
                                >
                                    <TableCell className="tableHeaderCell">{this.state.events.indexOf(row)+1}</TableCell>
                                    <TableCell className="tableHeaderCell">{row.name}</TableCell>
                                    <TableCell className="tableHeaderCell">{row.location}</TableCell>
                                    <TableCell className="tableHeaderCell">{moment(row.startTime, "YYYY-MM-DD, h:mm:ss").fromNow()}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>

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
                    var events_all = (respp.data.data[0].data)
                    this.setState({ events: events_all.slice(0,10) })
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