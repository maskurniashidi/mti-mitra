//dependency
import React, { useState } from 'react';
import { Link } from "react-router-dom";

//styling
import style from "./login.module.css";

//asset
import LogoMti from "../../assets/images/logo.png";
import unhide from "../../assets/images/eye.png";
import hide from "../../assets/images/eye-slash.png";

function Login() {

  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className={style.login}>
      <div className={style.loginContainer}>
        <div className={style.loginHeader}></div>
        <div className={style.loginLogo}>
          <img src={LogoMti} alt="logo mti" className={style.logo} />
        </div>
        <div className={style.loginText}>
          <div className={style.textTittle}>Selamat datang !</div>
          <div className={style.textDescription}>Masuk untuk mengelola informasi hotel anda mulai dari memeriksa reservasi hingga mengelola ketersediaan kamar!</div>
        </div>
        <form className={style.loginForm}>
          <label className={style.loginLabel}>
            <input type="email" className={style.loginInput} />
            <span className={style.inputLabel}>Email</span>
          </label>
          <label className={style.loginLabel}>
            <input className={style.loginInput} 
              type={isRevealPwd ? "text" : "password"}
              value={pwd}
              onChange={e => setPwd(e.target.value)}/>
            <span className={style.inputLabel}>Password</span>
            <div className={style.hidepass}>
              <img
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hide : unhide}
                  onClick={() => setIsRevealPwd(prevState => !prevState)}
              />
            </div>
          </label>
          <Link className={style.btnLogin} to="/dashboard">Login</Link>
          <p className={style.loginLogin}>
          Belum menjadi mitra?<span> </span>
            <Link className={style.linkToRegister} to="/register">
                Daftar disini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
