import React, {useState} from "react";
import {resetPassword} from "./AuthService";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/icons/Logo.png";

const ResetPassword = () => {
  const initialState = {
    email: "",
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
//       resetPassword(state).then((response) => {
//         console.log(response)
//         const {data} = response
//         console.log(data)
//         if (data.data.message){
//         //   history.push(`/dashboard`);
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
            <h1>Reset Password</h1>
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

            <button className="btn-xl-pry-in">Submit</button>
            </form>
        </div>
      </div>
      </>
  );
};

export default ResetPassword;
