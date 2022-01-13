import React from "react";

//styling
import "./Register.scss";

//asset
import HeaderImg from "../../assets/images/hotel/header.png";
import LogoMti from "../../assets/images/logo.png";

function Register() {
  return (
    <div className="register-container">
      <div className="register-form">
        <div className="box-header"></div>
        <div className="register-form-logoMti">
          <img src={LogoMti} alt="logo mti" className="logo" />
        </div>
        <div className="register-form-text">
          <div className="text-title">Create New Account</div>
          <div className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <form className="register-form-field">
          <label htmlFor="email" className="label-register">
            Email
          </label>
          <input type="text" className="input-register" />
          <button className="btn-register">Register</button>
          <p>
            Already have an account? <span>Login now</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
