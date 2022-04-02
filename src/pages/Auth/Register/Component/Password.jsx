import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Password = () => {
  const [reveal, setReveal] = useState(false);
  const [revealConfirmation, setRevealConfirmation] = useState(false);

  const { search } = useLocation();
  const history = useHistory();
  const step = new URLSearchParams(search).get("step");

  return (
    <div className="form-body">
      <div className="body-title">Masukkan password</div>
      <Form
        className="body-form step"
        onSubmit={(event) => {
          event.preventDefault();
          history.replace(`?step=${+(step || 1) + 1}`);
        }}
      >
        <Form.Floating className="mb-3">
          <div className="icon-action">
            {reveal ? (
              <HiEyeOff
                className="icon"
                onClick={() => setReveal((value) => !value)}
              />
            ) : (
              <HiEye
                className="icon"
                onClick={() => setReveal((value) => !value)}
              />
            )}
          </div>
          <Form.Control
            id="floatingPassword"
            type={reveal ? "text" : "password"}
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <div className="icon-action">
            {revealConfirmation ? (
              <HiEyeOff
                className="icon"
                onClick={() => setRevealConfirmation((value) => !value)}
              />
            ) : (
              <HiEye
                className="icon"
                onClick={() => setRevealConfirmation((value) => !value)}
              />
            )}
          </div>
          <Form.Control
            id="floatingRePassword"
            type={revealConfirmation ? "text" : "password"}
            placeholder="Password"
          />
          <label htmlFor="floatingRePassword">Konfirmasi ulang password</label>
        </Form.Floating>
        <Button className="btn-register mb-4" size="lg" type="submit">
          Selanjutnya
        </Button>
      </Form>
    </div>
  );
};

export default Password;
