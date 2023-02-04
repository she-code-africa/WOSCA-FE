import React from 'react';
import Logo from "../assets/icons/Logo.png";
import '../styles/components/footer.css';
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/linkedin.png";

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="row noflex">
                    <div className="col-md-3 col-xs-12 foot">
                        <a className="navbar-brands" href="#">
                            <img src={Logo} alt="Logo" className="flogo" />
                        </a>
                    </div>
                    <div className="col-md-5 col-xs-12 foot">
                        <p className="text">© 2022 SheCodeAfrica. All rights reserved.</p>
                    </div>
                    <div className="col-md-4 col-xs-12 foot">
                        <div className="sm_link">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/SheCodeAfrica"><img className="f_img" src={twitter} alt="twitter" /></a>
                            <a target="_blank" rel="noreferrer" href="https://web.facebook.com/SheCodeAfrica/"><img className="f_img" src={facebook} alt="facebook" /></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/shecodeafrica/"><img className="f_img" src={instagram} alt="instagram" /></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/she-code-africa/"><img className="f_img" src={linkedin} alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;