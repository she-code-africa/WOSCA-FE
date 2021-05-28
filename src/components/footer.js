import React, { Component } from 'react';
import Logo from "../assets/images/she-code-africa-logo.svg";
import '../styles/components/footer.css';
import facebook from "../assets/icons/facebook.jpg";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import sm from "../assets/icons/add-line.svg";

function Footer() {
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="col">
                            <a className="navbar-brands" href="#">
                                <img src={Logo} alt="Logo" className="flogo" />
                            </a>
                        </div>
                        <div className="col">
                            <p className="text">© 2021 SheCodeAfrica. All rights reserved.</p>
                        </div>
                        <div className="col ">
                            <div className="sm_link">
                                <a href="https://twitter.com/SheCodeAfrica"><img className="f_img" src={sm} alt="twitter" /></a>
                                <a href="https://web.facebook.com/SheCodeAfrica/"><img className="f_img" src={sm} alt="facebook" /></a>
                                <a href="https://www.instagram.com/shecodeafrica/"><img className="f_img" src={sm} alt="instagram" /></a>
                            </div>
                        </div>
                    </div>


                </footer>
            </React.Fragment>
        )
    }
export default Footer;