import React, {useState} from "react";
import {forgotPassword} from "./AuthService";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/icons/Logo.png";

const ForgotPassword = () => {
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

//   const handleSubmit = (event) => {
//      event.preventDefault()
//       forgotPassword(state).then((response) => {
//         console.log(response)
//         const {data} = response
//         console.log(data)
//         if (data.data.message){
//           history.push(`/dashboard`);
//         }
//         else{
//           return
//         }
//       });   
//   };

  return (
      <>
      <div className="password-recovery">
        <a className="logo-box" href="/">
            <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="form-outline">
            <div className="form-text-box">
            <h1>Forgot Password?</h1>
            <p>Please enter your registered details</p>
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

            <a href="/reset-password" className="forgot-password">
                Reset Password?
            </a>

            <button className="btn-xl-pry-in">Submit</button>
            </form>
        </div>
      </div>
      </>
  );
};

export default ForgotPassword;
