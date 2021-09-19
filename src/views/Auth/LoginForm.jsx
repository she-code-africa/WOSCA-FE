import React, { useState } from "react";
import Auth from "./AuthPage";
import { signin, forgotPassword } from "./AuthService";
import { useHistory } from "react-router-dom";


import { useUserContext } from "../../context/AuthContext"

const LoginForm = () => {
  const initialState = {
    email: "",
    password: ""
  }

  const [state, setState] = useState(initialState);
  const { setToken, setUser } = useUserContext()
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(state)
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
     event.preventDefault()
      signin(state).then((response) => {
        const {data} = response.data
        setToken(data.token)
        setUser(data.user)
        if (data.message){
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
            className="input-init aaa"
            placeholder="Enter Email Address"
            onChange ={handleChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            className="input-init aaa"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <a href="/forgot-password" className="forgot-password" onClick={forgotPassword}>
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
