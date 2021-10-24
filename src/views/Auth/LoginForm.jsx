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
  const [errorMsg, setErrorMsg] = useState(" ")
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(state)
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log("hi")
    setLoading(true)
     event.preventDefault()
      signin(state).then((response) => {
        if(response.data){
          const {data} = response?.data
          if (data.message){
            setToken(data.token)
            setUser(data.user)
            history.push(`/dashboard`);
          }
          setLoading(false)
        }        
        else{
          setErrorMsg("Could not Sign User In, Check Credentials")
          setLoading(false)
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
        <form className="auth-form" >
          <div className="error-message">{errorMsg}</div>
          <input
            type="text"
            id="email"
            name="email"
            className="input-init aaa"
            placeholder="Enter Email Address"
            onChange ={handleChange}
            required
          />

<div className="password-box">
         <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            className="input-init aaa"
            placeholder="Choose Password"
            onChange={handleChange}
            required
          />
          <i  style={{margin:"auto", zIndex:"2", position:"relative"}}
              onClick={togglePassword}
              className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}
            />
         </div>

          <a href="/forgot-password" className="forgot-password" onClick={forgotPassword}>
            Forgot Password?
          </a>

          <button className="btn-xl-pry-in" onClick={handleSubmit}>{loading ? <i className="fa fa-circle-o-notch fa-spin" style={{display:`${loading}`}}></i> : "SIGN IN"}</button>

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
