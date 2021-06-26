import React from "react";
import Auth from "./AuthPage"
const LoginForm = () => {
  return (
    <Auth>
      <div className="form-outline sign-up">
        <div className="form-text-box">
          <h1>Sign Up</h1>
          <p>Please enter your registered details to sign in</p>
        </div>
        <form className="form">
          <input
            type="text"
            id="email"
            name="email"
            className="input-init"
            placeholder="Enter Full Name"
          />

          <input
            type="text"
            id="email"
            name="email"
            className="input-init"
            placeholder="Enter Email Address"
          />

          <input
            type="text"
            id="email"
            name="email"
            className="input-init"
            placeholder="Choose Password"
          />

          <p href="#" className="forgot-password">
            I accept the terms of use
          </p>

          <button className="btn-xl-pry-in">SIGN UP</button>

          <div className="signup">
            <p className="">
              Already have an account ?
              <a href="/signin" className="signup-link">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </Auth>
  );
};

export default LoginForm;
