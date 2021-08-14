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
        <form className="auth-form">
          <input
            type="text"
            id="name"
            name="name"
            className="input-init"
            placeholder="Enter Full Name"
          />

          <input
            type="email"
            id="email"
            name="email"
            className="input-init"
            placeholder="Enter Email Address"
          />

          <input
            type="password"
            id="password"
            name="password"
            className="input-init"
            placeholder="Choose Password"
          />

          <div class="round">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox"></label>
              {/* <span>I accept the terms of use</span> */}
            </div>

          <button className="btn-xl-pry-in">SIGN UP</button>

          <div className="signup">
            <p className="prompt">
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
