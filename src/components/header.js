import React, { Component } from 'react';
import Logo from "../assets/icons/Logo.png";
import '../styles/components/header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
        };
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-lighter bg-lighter">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="Logo" className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Resources</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/events">Events</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/faq">FAQs</a>
                            </li>
                        </ul>
                        <a className="nav-link" href="signin">Sign In</a>
                        <a href="signup"><button className="btn btn-outline my-2 my-sm-0">GET STARTED</button></a>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
export default Header;