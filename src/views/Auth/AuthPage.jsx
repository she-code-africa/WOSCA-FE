import React, { useState } from "react";
import Logo from "../../assets/icons/Logo.png";

function AuthPage({ children }) {
  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="logo-box">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="main-body">
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">
                Start contributing to open source project
              </span>
            </h1>
            <p className="heading-primary-sub">
              Create a free account to get started on your journey to
              world-known contributor
            </p>
          </div>
          <div className="auth-forms">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
