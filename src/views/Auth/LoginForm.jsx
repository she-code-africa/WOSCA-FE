import React from "react";

const LoginForm = () => {
  return (
    <div>
      <div className="form-outline">
        <div className="form-text-box">
          <h1>Sign In</h1>
          <p>Please enter your registered details to sign in</p>
        </div>
        <form className="form">
          <input
            type="text"
            id="email"
            name="email"
            className="input-init"
            placeholder="Enter your email"
          />

          <input
            type="text"
            id="email"
            name="email"
            className="input-init"
            placeholder="Enter your email"
          />

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <button className="btn-xl-pry-in">Sign In</button>

          <div className="signup">
            <p className="">
              Don't have an account?
              <a href="#" className="signup-link">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
