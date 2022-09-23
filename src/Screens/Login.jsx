import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar myClass="nav_dark" />
      <div className="login_container">
        <p>Log in</p>
        <div className="icon_container">
          <img
            src="https://assets.hostinger.com/images/login/google-213cd1c446.svg"
            alt=""
            className="google"
          />
          <img
            src="https://assets.hostinger.com/images/login/facebook-7fcb46c06e.svg"
            alt=""
            className="facebook"
          />
        </div>
        <div className="or_container">
          <div className="or_left"></div>
          <span>or</span>
          <div className="or_right"></div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn login_form_btn">Log in</button>
          <p>Forgot Password?</p>
        </form>
      </div>
    </>
  );
};

export default Login;
