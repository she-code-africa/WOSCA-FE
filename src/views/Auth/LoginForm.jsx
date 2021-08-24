import React, {useState, useEffect} from "react";
import Auth from "./AuthPage";
import {signin, forgotPassword, resetPassword} from "./AuthService";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: ""
  }

  const [state, setState] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(state)
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
     event.preventDefault()
      signin(state).then((response) => {
        console.log(response)
        const {data} = response
        console.log(data)
        if (data.data.message){
          history.push(`/dashboard`);
        }
        else{
          return
        }
      });
    
  };

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
            onChange ={handleChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            className="input-init"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <a href="#/" className="forgot-password" onClick={forgotPassword}>
            Forgot Password?
          </a>

          <button className="btn-xl-pry-in" onClick={handleSubmit}>SIGN IN</button>

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
