import React, {useState} from "react";
import {forgotPassword} from "./AuthService";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/icons/Logo.png";
import Modal from "../../components/Modal"

const ForgotPassword = () => {
  const initialState = {
    email: "",
  }
  const [state, setState] = useState(initialState);
  const [showModal, setShowModal] =useState("none");
  const [display, setDisplay] =useState("block")
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(state)
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
     event.preventDefault()
      forgotPassword(state).then((response) => {
        console.log(response)
        const {data} = response
        console.log(data)
        if (data.data.message){
            setShowModal("block")
            setDisplay("none")
        }
        else{
          return
        }
      });
    
  };

  return (
      <>
      <div className="password-recovery">
        <a className="logo-box" href="/">
            <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="form-outline" style={{display: `${display}`}}>
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

            <button className="btn-xl-pry-in" onClick={handleSubmit}>Submit</button>
            </form>
        </div>

        <div className="form-outline" style={{display: `${showModal}`}}>
            <div className="form-text-box">
            <h1>Reset Password</h1>
            </div>
            <h6>Password has been reset, check your mail.</h6>
        </div>
      </div>
      
      </>
  );
};

export default ForgotPassword;
