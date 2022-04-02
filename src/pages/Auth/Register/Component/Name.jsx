import { useLocation, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Name = () => {
  const { search } = useLocation();
  const history = useHistory();
  const step = new URLSearchParams(search).get("step");

  return (
    <div className="form-body">
      <div className="body-title">Masukkan nama bisnis</div>
      <Form
        className="body-form step"
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
          <label htmlFor="floatingEmail">Nama Bisnis</label>
        </Form.Floating>
        <Button
          className="btn-register mb-4"
          size="lg"
          type="submit"
          variant="primary"
        >
          Selanjutnya
        </Button>
      </Form>
    </div>
  );
};

export default Name;
