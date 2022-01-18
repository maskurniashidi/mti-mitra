//dependency
import React from "react";
import { Link } from "react-router-dom";

//styling
import style from "./register_Password.module.css";

function Register_Password() {
  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
        <div className={style.registerText}>
          <div className={style.textTittle}>*Tombol back*</div>
          <div className={style.textTittle}>Masukan Password</div>
        </div>
        <form className={style.registerForm}>
          <label className={style.registerLabel}>
            <input type="email" className={style.registerInput} />
            <span className={style.inputLabel}>Password</span>
          </label>
          <label className={style.registerLabel}>
            <input type="email" className={style.registerInput} />
            <span className={style.inputLabel}>Konfirmasi Ulang Kata Sandi</span>
          </label>
          <Link className={style.btnRegister} to="/register_Konfirmasi_Email">Selanjutnya</Link>
        </form>
      </div>
    </div>
  );
}

export default Register_Password;
