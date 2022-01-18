//dependency
import React from "react";
import { Link } from "react-router-dom";

//styling
import style from "./register_Konfirmasi_Email.module.css";

function Register_Konfirmasi_Email() {
  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
        <div className={style.registerText}>
          <div className={style.textTittle}>*Tombol back*</div>
          <div className={style.textTittle}>Langkah Terakhir:</div>
          <div className={style.textTittle}>Konfirmasi Pendaftaran Anda</div>
          <div className={style.textTittle}>*Gambar Animasi*</div>
          <div className={style.textTittle}>Belum menerima email? Kirim Ulang</div>
          <Link className={style.btnRegister} to="/login">Masuk</Link>
        </div>
      </div>
    </div>
  );
}

export default Register_Konfirmasi_Email;
