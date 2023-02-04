import React, { Component } from "react";
import Dashboard from "./custom";
import '../../styles/views/admin.css';
import Header from '../../components/admin-head';

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