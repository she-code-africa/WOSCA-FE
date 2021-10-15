import React, { Component } from "react";
import Logo from "../../assets/icons/Logo.png";
import Events from './events';
import User from './users';
import Repos from './repos';
import '../../styles/views/admin.css';
import '../../styles/views/react-bootstrap-table-all.min.css';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    showUsers = () => {
        this.setState({ value: 0 });
    }
    showRepos = () => {
        this.setState({ value: 1 });
    }
    showEvents = () => {
        this.setState({ value: 2 });
    }
    render() {
        return (
            <div className="dashboard">
                <div className="">
                    <div className="logo-box">
                        <img src={Logo} alt="Logo" className="logo" />
                    </div>
                    <div className="dashboard-body">
                        <div className="greeting"> <p className="greeting-text">Good Morning, Admin</p></div>
                        <div className="row contribution-cards">
                            <div className="col">
                                <button
                                    className="sub-button admin_button" onClick={() => { this.showEvents(); }}>ADD EVENTS
                                </button>
                            </div>
                            <div className="col">
                                <button
                                    className="sub-button admin_button" onClick={() => { this.showRepos(); }}> VIEW PRs
                                </button>
                            </div>
                            <div className="col">
                                <button
                                    className="sub-button admin_button" onClick={() => { this.showUsers(); }}>VIEW USERS
                                </button>
                            </div>
                        </div>
                        {
                            this.state.value === 2 ? (<Events />) : this.state.value === 1 ? (<Repos />) : (<User />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;