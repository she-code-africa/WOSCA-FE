import React, { useState } from "react";
import Auth from "./AuthPage";
import {signup} from "../Auth/AuthService";
import { useHistory } from "react-router-dom";

import { useUserContext } from "../../context/AuthContext";

const SignUpForm = () => {
  const initialState = {
    email: "",
  }

  const [state, setState] = useState(initialState);
  const { setToken, setUser } = useUserContext()
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory();
  const [loading, setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault()
      setLoading(true)
      signup(state).then((response) => {
        if(response.data){
          const { data } = response.data
          if (data.message) {
            setToken(data.token)
            setUser(data.user)
            history.push(`/dashboard`);
          }
          setLoading(false)
        }
        else{
          console.log(response)
          setErrorMsg("Could not Create Account, Check Credentials")
          setLoading(false)
        }
      })
      .catch((error) => {
          console.log(error);
          setLoading(false)
          setErrorMsg(error)
      })
  };
  return (
    <Auth>
      <div className="form-outline sign-up admin-form">
        <div className="form-text-box">
          <h1>Request Access</h1>
          <p>Enter your assigned SCA email address and why you’ll like to gain access to the platform.</p>
        </div>
        <div className="error-message">{errorMsg}</div>
        <form className="auth-form" >
          <input
            type="email"
            id="email"
            name="email"
            className="input-init aaa"
            placeholder="Enter Email Address"
            onChange={handleChange}
            required
          />

         {/* <div className="password-box">
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
         </div> */}

          <textarea className="texta-init" name="access" rows="4" cols="50" placeholder="Why do you want access?" onChange={handleChange}>
             
          </textarea>

          <button className="btn-xl-pry-in" onClick={handleSubmit}>{loading ? <i className="fa fa-circle-o-notch fa-spin" style={{display:`${loading}`}}></i> : "Log In"}</button>

          <div className="signup">
            <p className="prompt">
              Already have an account ?
              <a href="/admin/login" className="signup-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </Auth>
  );
};

export default SignUpForm;
