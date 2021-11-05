import React from "react";
import Logo from "../../assets/icons/Logo.png";

function AuthPage({ children }) {
  return (
    <div className="main-container admin-page">
      <div className="admin">
        <div>
          <div className="logo-box">
            <a href="/">
            <img src={Logo} alt="Logo" className="auth-logo" />
          </a></div>
          <div className="main-body">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
