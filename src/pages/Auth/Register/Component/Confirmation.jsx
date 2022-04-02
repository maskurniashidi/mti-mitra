import { Link, useLocation } from "react-router-dom";

import confirmImage from "../../../../assets/images/confirm.svg";

const Confirmation = () => {
  const { search } = useLocation();
  const step = new URLSearchParams(search).get("step");

  return (
    <div className="form-body">
      <div className="body-title">Langkah terakhir!</div>
      <div className="body-subtitle step">Konfirmasi pendaftaran anda.</div>
      <div className="body-form">
        <div className="confirm">
          <img
            src={confirmImage}
            alt="confirmation"
            className="confirm-image"
          />
          <small className="confirm-description">
            Konfirmasi pendaftaran anda dengan mengakses link yang telah kami
            kirim melalui email anda.
          </small>
        </div>
        <div className="text-register">
          Belum menerima email?{" "}
          <Link to={`?step=${+(step || 1) + 1}`}>Kirim ulang email</Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
