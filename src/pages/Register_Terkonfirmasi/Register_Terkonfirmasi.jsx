//dependency
import React, { useState } from "react";
import { Link } from "react-router-dom";

//styling
import style from "./register_Terkonfirmasi.module.css";

//assets
import { ImArrowLeft2 } from 'react-icons/im';
import LogoMti from "../../assets/images/logo.png";
import confirmedImage from "../../assets/images/confirmed.svg";
import unhide from "../../assets/images/eye.png";
import hide from "../../assets/images/eye-slash.png";

function Register_Terkonfirmasi() {

  const [pwd, setPwd] = useState('');
  const [Confpwd, setConfPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfPwd, setIsRevealConfPwd] = useState(false);

  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
        <div className={style.registerContainer2}>
          <div className={style.registerText}>
            <div className={style.arrowBackArea}>
              <Link className={style.arrowBack} to="/register_Password"><ImArrowLeft2/></Link>
              <div className={style.logoMtiArea}><img src={LogoMti} alt="logo mti" className={style.logoMti} /></div>
            </div>
            <div className={style.textTittle}>Sudah terkonfirmasi!</div>
          </div>
          <div className={style.registerLogo}>
            <img src={confirmedImage} alt="confirmation" className={style.confirmImages} />
          </div>
          <div className={style.registerMiniText}>
            <div className={style.textDescription}>Pendaftaran anda telah terkonfirmasi sebelumnya. Masuk atau daftarkan akun lain anda agar dapat terhubung ke Medical Tourism Indonesia..</div>
          </div>
          <div className={style.registerResendText}>
            <div className={style.textResend}>Belum masuk akun?</div>
            <div className={style.textResendButton}>Masuk disini</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register_Terkonfirmasi;
