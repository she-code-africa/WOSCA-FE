import React, { Component } from "react";
import Logo from "../../assets/icons/Logo.png";
import Dashboard from "./custom";
import Events from './events';
import Programs from './programs';
import User from './users';
import Repos from './repos';
import '../../styles/views/admin.css';
import { FiBell } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            subMenu: false
        };
    }
    showDashboard = () => {
        this.setState({ value: 0 });
    }
    showUsers = () => {
        this.setState({ value: 1 });
    }
    showRepos = () => {
        this.setState({ value: 2 });
    }
    showEvents = () => {
        this.setState({ value: 3 });
    }
    showPrograms = () => {
        this.setState({ value: 4 });
    }
    showsubmenu = () => {
        this.setState(prevState => ({
            subMenu: !prevState.subMenu
        }));
    }

    render() {
        const { value, subMenu } = this.state;
        return (
            <div className="dashboard">
                <div className="">
                    <div className="logo-box a-box">
                        <img src={Logo} alt="Logo" className="logo" />
                        <ul>
                            <li className={value === 0 ? "admin-active" : ""} onClick={() => { this.showDashboard(); }} >Dashboard</li>
                            <li className={value === 1 ? "admin-active" : ""} onClick={() => { this.showUsers(); }} >My Users</li>
                            <li className={value === 3 ? "admin-active" : ""} onClick={() => { this.showEvents(); }} >All Events</li>
                            <li className={value === 4 ? "admin-active" : ""} onClick={() => { this.showPrograms(); }} >All Programs</li>
                            <li className={value === 2 ? "admin-active" : ""} onClick={() => { this.showRepos(); }} >All PRs</li>
                        </ul>
                        <div className="right-bar">
                            <div>
                                <FiBell className="belln" />
                                <span className="far-right" onClick={() => { this.showsubmenu(); }} >
                                    <icon>LK</icon>
                                    <text>
                                        Lola
                                    </text>
                                    < MdKeyboardArrowDown />
                                </span>
                            </div>
                            {
                                subMenu ?
                                    <div className="below">
                                        <ol>
                                            <li><a href="/">Main Site</a></li>
                                            <li><a href="/">My Profile</a></li>
                                            <li><a href="/">Log Out</a></li>
                                        </ol>
                                    </div>
                                    :
                                    <></>
                            }

                        </div>
                    </div>
                    <div className="dashboard-body admin-body">
                        {
                            this.state.value === 4 ? (<Programs />) : this.state.value === 3 ? (<Events />) : this.state.value === 2 ? (<Repos />) : this.state.value === 1 ? (<User />) : (<Dashboard />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;