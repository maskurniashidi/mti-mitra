import { Link } from "react-router-dom";

import confirmedImage from "../../../../assets/images/confirmed.svg";

const Confirmed = () => {
  return (
    <div className="form-body">
      <div className="body-title">Sudah terkonfirmasi!</div>
      <div className="body-form">
        <div className="confirm">
          <img
            src={confirmedImage}
            alt="confirmation"
            className="confirm-image"
          />
          <small className="confirm-description">
            Pendaftaran anda telah terkonfirmasi sebelumnya. Masuk atau
            daftarkan akun lain anda agar dapat terhubung ke Medical Tourism
            Indonesia.
          </small>
        </div>
        <div className="text-register">
          Belum masuk akun? <Link to="/login">Masuk disini</Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
