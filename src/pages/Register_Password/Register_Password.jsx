//dependency
import React, { useState } from "react";
import { Link } from "react-router-dom";

//styling
import style from "./register_Password.module.css";

//assets
import { ImArrowLeft2 } from 'react-icons/im';
import unhide from "../../assets/images/eye.png";
import hide from "../../assets/images/eye-slash.png";

function Register_Password() {

  const [pwd, setPwd] = useState('');
  const [Confpwd, setConfPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfPwd, setIsRevealConfPwd] = useState(false);

  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
      <div className={style.registerContainer2}>
        <div className={style.registerText}>
          <Link className={style.textTittle} to="/register_Bussiness_Name"><ImArrowLeft2/></Link>
          <div className={style.textTittle}>Masukan Password</div>
        </div>
        <form className={style.registerForm}>
          <label className={style.registerLabel}>
            <input className={style.registerInput} 
              type={isRevealPwd ? "text" : "password"}
              value={pwd}
              onChange={e => setPwd(e.target.value)}
            />
            <span className={style.inputLabel}>Password</span>
            <div className={style.hidepass}>
              <img
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hide : unhide}
                  onClick={() => setIsRevealPwd(prevState => !prevState)}
              />
            </div>
          </label>
        </form>
        <form className={style.registerForm}>
          <label className={style.registerLabel}>
            <input className={style.registerInput} 
              type={isRevealConfPwd ? "text" : "password"}
              value={Confpwd}
              onChange={e => setConfPwd(e.target.value)}
            />
            <span className={style.inputLabel}>Konfirmasi Ulang Kata Sandi</span>
            <div className={style.hidepass}>
              <img
                  title={isRevealConfPwd ? "Hide password" : "Show password"}
                  src={isRevealConfPwd ? hide : unhide}
                  onClick={() => setIsRevealConfPwd(prevState => !prevState)}
              />
            </div>
          </label>
          <Link className={style.btnRegister} to="/register_Konfirmasi_Email">Selanjutnya</Link>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Register_Password;
