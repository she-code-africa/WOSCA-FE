import React, { useState } from "react";
import Logo from "../../assets/images/she-code-africa-logo.svg";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function AuthPage({children}) {
  const [activity, setActivity] = useState(false);

  const toggleActivity = () => {
    setActivity(!activity);
    console.log(activity);
  };
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
        {children}
      </div>
    </div>
  );
}

export default AuthPage;
