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
  // const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory();


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    signup(state).then((response) => {
      const { data } = response.data
      console.log(data)
      setToken(data.token)
      setUser(data.user)
      if (data.message) {
        history.push(`/dashboard`);
      }
    })
      .catch((error) => {
        console.log(error);
        // setErrorMsg(error)
      })

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
            className="input-init aaa"
            placeholder="Enter Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            className="input-init aaa"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            className="input-init aaa"
            placeholder="Choose Password"
            onChange={handleChange}
          />

          <div class="round">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"></label>
            <span onClick={handleShow}>I accept the  terms of use</span>
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
