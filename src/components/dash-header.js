import React, { Component } from 'react';
import Logo from "../assets/icons/Logo.png";
import '../styles/components/header.css';
import { UserContext } from "../context/AuthContext";
import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
        };
    }

    // const history = useHistory();


    logoutHandler = () => {
        localStorage.clear();
        window.location.reload();
    }


    render() {
        // const { token, user } = this.context
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-lighter bg-lighter">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="Logo" className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                        {/* <i class="fas fa-bars"></i> */}
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/resources">Resources</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/events">Events</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/programs">Programs</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/faq">FAQs</a>
                            </li>
                        </ul>
                        <a href="#" onClick={this.logoutHandler}><button className="btn btn-outline my-2 my-sm-0">LOGOUT</button></a>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
Header.contextType = UserContext
// export default Header;
export default withRouter(Header);