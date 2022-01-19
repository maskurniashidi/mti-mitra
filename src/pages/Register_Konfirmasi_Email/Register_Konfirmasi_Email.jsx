//dependency
import React, { useState } from "react";
import { Link } from "react-router-dom";

//styling
import style from "./register_Konfirmasi_Email.module.css";

//assets
import { ImArrowLeft2 } from 'react-icons/im';
import LogoMti from "../../assets/images/logo.png";
import confirmImage from "../../assets/images/confirm.svg";
import unhide from "../../assets/images/eye.png";
import hide from "../../assets/images/eye-slash.png";

function Register_Konfirmasi_Email() {

  const [pwd, setPwd] = useState('');
  const [Confpwd, setConfPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfPwd, setIsRevealConfPwd] = useState(false);

  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
        <div className={style.registerContainer2}>
          <div className={style.registerText}>
            <div className={style.logoMtiArea}><img src={LogoMti} alt="logo mti" className={style.logoMti} /></div>
            <div className={style.textTittle}>Langkah terakhir :</div>
            <div className={style.textTittle2}>Konfirmasi pendaftaran anda!</div>
          </div>
          <div className={style.registerLogo}>
            <img src={confirmImage} alt="confirmation" className={style.confirmImages} />
          </div>
          <div className={style.registerMiniText}>
            <div className={style.textDescription}>Konfirmasi pendaftaran anda dengan mengakses link yang telah kami kirim melalui email anda.</div>
          </div>
          <p className={style.loginLogin}>
          Belum menerima email?<span> </span>
            <Link className={style.linkToLogin} to="/">
                Kirim ulang email
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register_Konfirmasi_Email;
