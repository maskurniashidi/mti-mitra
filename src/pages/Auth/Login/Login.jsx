import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

import Logo from "../../../assets/images/logo.png";
import FormHeader from "../../../assets/images/form-header.png";

import "./Login.scss";

const Login = () => {
  const [reveal, setReveal] = useState(false);
  const history = useHistory();

  return (
    <div className="login-wrapper">
      <Container>
        <div className="login-form">
          <div className="form-header">
            <div className="header-background">
              <img src={FormHeader} alt="header" />
            </div>
            <div className="header-logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <div className="form-body">
            <div className="body-title">Selamat datang!</div>
            <div className="body-subtitle">
              Masuk untuk mengelola informasi mitra anda mulai dari memeriksa
              reservasi hingga mengelola ketersediaan!
            </div>
            <Form
              className="body-form"
              onSubmit={(event) => {
                event.preventDefault();
                history.replace(`/hotel/submission`);
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
              {/* <div className="text-forgot mb-3">
              <small>Forgot password?</small>
            </div> */}
              <Button className="btn-login mb-4" size="lg" type="submit">
                Login
              </Button>
              <div className="text-register">
                Belum menjadi mitra? <Link to="/register">Daftar disini!</Link>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
