import React from "react";
import Logo from "../../assets/images/she-code-africa-logo.svg";
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

function AuthPage() {
  return (
    <div className="main-container">
      <div className="logo-box">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">
            Start contributing to open source project
          </span>
        </h1>
        <p className="heading-primary-sub">
          Create a free account to get started on your journey to world-known
          contributor
        </p>
      </div>
      <div className="forms"> 
      {/* <div className={classes.grid2}>
            <Button onClick={toggleActivity} className={classes.button}>
              {activity ? `SIGN IN` : `SIGN UP`}
            </Button>
          </div> */}
        <SignUpForm/>
      </div>
      
    </div>
  );
}

export default AuthPage;
