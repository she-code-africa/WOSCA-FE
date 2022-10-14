import React, { useState } from "react";
import Auth from "./AuthPage";
import { signup } from "./AuthService";
import { useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Terms from "../../components/Terms";

import { useUserContext } from "../../context/AuthContext";

const SignUpForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  }

  const [state, setState] = useState(initialState);
  const { setToken, setUser } = useUserContext()
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleCheck = (e) =>{
    console.log(e.target.checked)
    setIsChecked(!isChecked)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isChecked){
      setErrorMsg("Please Accept Terms of Use")
    }else{
      setLoading(true)
      signup(state).then((response) => {
        if(response.data){
          // const { data } = response.data
          var vop = response.data.data
          if (vop.token) {
            setToken(vop.token)
            setUser(vop.user)
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
          // console.log(error);
          setLoading(false)
          setErrorMsg(error)
      })
    }
  };
  return (
    <Auth>
      <div className="form-outline sign-up">
        <div className="form-text-box">
          <h1>Sign Up</h1>
          <p>Please enter your details to sign up</p>
        </div>
        <div className="error-message">{errorMsg}</div>
        <form className="auth-form" >
          <input
            type="text"
            id="name"
            name="username"
            className="input-init aaa"
            placeholder="Enter Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            className="input-init aaa"
            placeholder="Enter Email Address"
            onChange={handleChange}
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

          <div className="round">
            <input type="checkbox" id="checkbox" onClick={handleCheck}/>
            <label htmlFor="checkbox"></label>
            <span onClick={handleShow}>I accept the  terms of use</span>
          </div>


          <button className="btn-xl-pry-in" onClick={handleSubmit}>{loading ? <i className="fa fa-circle-o-notch fa-spin" style={{display:`${loading}`}}></i> : "SIGN UP"}</button>

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
      <Modal
        show={show}
        onHide={handleClose}
        // size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Terms & Conditions of Use</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Terms />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            UNDERSTOOD
          </Button>
        </Modal.Footer>
      </Modal>
    </Auth>
  );
};

export default SignUpForm;
