import React, {useEffect, useState} from "react";
import Auth from "./AuthPage";
import {signup} from "./AuthService";
import { useHistory } from "react-router-dom";
const SignUpForm = () => {
  const initialState = {
     username: "",
     email: "",
     password: "",
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
      signup(state).then((response) => {
        const {data} = response
        console.log(data)
        if (data.data.message){
          history.push(`/dashboard`);
        }
        else{
          return;
        }
      });
    
  };
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
            name="username"
            className="input-init"
            placeholder="Enter Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            className="input-init"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            className="input-init"
            placeholder="Choose Password"
            onChange={handleChange}
          />

          <div class="round">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox"></label>
            </div>

          <button className="btn-xl-pry-in" onClick={handleSubmit}>SIGN UP</button>

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

export default SignUpForm;
