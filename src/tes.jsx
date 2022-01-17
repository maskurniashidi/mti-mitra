import React from "react";
import { Link } from "react-router-dom";

//styling
import "./Register.scss";

//asset
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
        <form className="register-form__field">
          <div htmlFor="email" className="label__register">
            <input type="email" className="input__register" required placeholder=" " />
            <label className="input__label">Email</label>
          </div>
          <button className="btn-register">Register</button>
          <p>
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
