import React, { Component } from "react";
import Logo from "../../assets/icons/Logo.png";
import { Card, BigCard } from "../../components/Card";
import { AiOutlineLink, AiOutlineUser } from 'react-icons/ai';
import { BsCheckAll, BsArrowRight } from 'react-icons/bs'
import Events from './events';
import User from './users';
import Repos from './repos';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: true,
            repo: false,
            events: false,
        };
    }
    showUsers = () => {
        this.setState({ user: true });
        this.setState({ repo: false });
        this.setState({ events: false });
    }
    showRepos = () => {
        this.setState({ user: false });
        this.setState({ repo: true });
        this.setState({ events: false });
    }
    showEvents = () => {
        this.setState({ user: false });
        this.setState({ repo: false });
        this.setState({ events: true });
    }
    render() {
        const clickable_card = {
            cursor: 'pointer'
        }
        return (
            <div className="dashboard">
                <div className="">
                    <div className="logo-box">
                        <img src={Logo} alt="Logo" className="logo" />
                    </div>
                    <div className="dashboard-body">
                        <div className="greeting"> <p className="greeting-text">Good Morning, Admin</p></div>
                        <div className="contribution-cards">
                            <BigCard onClick={() => { this.showEvents(); }} style={clickable_card} title="New" subtitle="Event" button={<button>Add New Event <div className="card-btn-icon"><BsArrowRight /></div></button>} />
                            <Card onClick={() => { this.showUsers(); }} style={clickable_card} className="clickable_card" title="Total Users" value="35" icon={<AiOutlineUser color={'#fff'} />} />
                            <Card onClick={() => { this.showRepos(); }} style={clickable_card} className="clickable_card" title="Total Contributions" value="345" icon={<AiOutlineLink color={'#fff'} />} />
                        </div>
                        {this.state.events ? (<Events />) : this.state.repo ? (<Repos />) : (<User />)}
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;