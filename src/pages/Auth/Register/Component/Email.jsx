import { Link, useLocation, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Email = () => {
  const { search } = useLocation();
  const history = useHistory();
  const step = new URLSearchParams(search).get("step");

  return (
    <div className="form-body">
      <div className="body-title">Buat akun baru</div>
      <div className="body-subtitle">
        Daftarkan hotel anda sebagai mitra dan kami akan membantu anda agar bisa
        terhubung ke Medical Tourism Indonesia!
      </div>
      <Form
        className="body-form"
        onSubmit={(event) => {
          event.preventDefault();
          history.replace(`?step=${+(step || 1) + 1}`);
        }}
      >
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingEmail"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingEmail">Email</label>
        </Form.Floating>
        <Button
          className="btn-register mb-4"
          size="lg"
          type="submit"
          variant="primary"
        >
          Daftar
        </Button>
        <div className="text-register">
          Sudah menjadi mitra? <Link to="/login">Masuk sekarang</Link>
        </div>
      </Form>
    </div>
  );
};

export default Email;
