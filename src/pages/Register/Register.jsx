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
        <div className={style.registerContainer2}>
          <div className={style.registerLogo}>
            <img src={LogoMti} alt="logo mti" className={style.logo} />
          </div>
          <div className={style.registerText}>
            <div className={style.textTittle}>Buat akun baru</div>
            <div className={style.textDescription}>Daftarkan hotel anda sebagai mitra dan kami akan membantu anda agar bisa terhubung ke Medical Tourism Indonesia!</div>
          </div>
          <form className={style.registerForm}>
            <label className={style.registerLabel}>
              <input type="email" className={style.registerInput} />
              <span className={style.inputLabel}>Email</span>
            </label>
            <Link className={style.btnRegister} to="/register_Bussiness_Name">Register</Link>
            <p className={style.loginRegister}>
              Sudah menjadi mitra?<span> </span>
              <Link className={style.linkToLogin} to="/login">
                Masuk sekarang
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
