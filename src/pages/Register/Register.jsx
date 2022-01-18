//dependency
import React from "react";
import { Link } from "react-router-dom";

//styling
import style from "./register.module.css";

//asset
import LogoMti from "../../assets/images/logo.png";

function Register() {
  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
        <div className={style.registerHeader}></div>
        <div className={style.registerLogo}>
          <img src={LogoMti} alt="logo mti" className={style.logo} />
        </div>
        <div className={style.registerText}>
          <div className={style.textTittle}>Create New Account</div>
          <div className={style.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <form className={style.registerForm}>
          <label className={style.registerLabel}>
            <input type="email" className={style.registerInput} />
            <span className={style.inputLabel}>Email</span>
          </label>
          <Link className={style.btnRegister} to="/register_Bussiness_Name">Register</Link>
          <p className={style.loginRegister}>
            Already have an account?<span> </span>
            <Link className={style.linkToLogin} to="/login">
              Login now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
