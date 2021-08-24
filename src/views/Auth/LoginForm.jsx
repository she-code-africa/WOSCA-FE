import React from "react";
import Auth from "./AuthPage"

const LoginForm = () => {
  return (
    <Auth>
      <div className="form-outline">
        <div className="form-text-box">
          <h1>Sign In</h1>
          <p>Please enter your registered details to sign in</p>
        </div>
        <form className="auth-form">
          <input
            type="text"
            id="email"
            name="email"
            className="input-init"
            placeholder="Enter Email Address"
          />

          <input
            type="password"
            id="email"
            name="email"
            className="input-init"
            placeholder="Enter Password"
          />

          <a href="#/" className="forgot-password">
            Forgot Password?
          </a>

          <button className="btn-xl-pry-in">SIGN IN</button>

          <div className="signup">
            <p className="prompt">
              Don't have an account?
              <a href="/signup" className="signup-link">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </Auth>
  );
};

export default LoginForm;
