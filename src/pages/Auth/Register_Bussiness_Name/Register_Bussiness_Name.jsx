//dependency
import React from "react";
import { Link } from "react-router-dom";

//styling
import style from "./register_Bussiness_Name.module.css";

//assets
import { ImArrowLeft2 } from 'react-icons/im';

const Register_Bussiness_Name = () => {

  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
      <div className={style.registerContainer2}>
        <div className={style.registerText}>
          <Link className={style.textTittle} to="/register"><ImArrowLeft2/></Link>
          <div className={style.textTittle}>Masukan Nama Bisnis</div>
        </div>
        <form className={style.registerForm}>
          <label className={style.registerLabel}>
            <input type="email" className={style.registerInput} />
            <span className={style.inputLabel}>Nama Bisnis</span>
          </label>
          <Link className={style.btnRegister} to="/register_Password">Selanjutnya</Link>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Register_Bussiness_Name;