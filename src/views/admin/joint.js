import React, { Component } from "react";
// import Logo from "../../assets/icons/Logo.png";
import Dashboard from "./custom";
// import Events from './events';
// import Programs from './programs';
// import User from './users';
// import Repos from './repos';
import '../../styles/views/admin.css';
import Header from '../../components/admin-head';
// import { FiBell } from 'react-icons/fi';
// import { MdKeyboardArrowDown } from 'react-icons/md';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: 0,
            // subMenu: false
        };
    }
   

    render() {
        const { value, subMenu } = this.state;
        return (
            <>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </>
        )
    }
}
export default Admin;