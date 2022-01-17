import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import FormHeader from "../../assets/images/form-header.png";

import "./Login.scss";

function Login() {
  return (
    <Container>
      <div className="login-form">
        <div className="form-header">
          <div className="header-background">
            <img src={FormHeader} />
          </div>
          <div className="header-logo">
            <img src={Logo} />
          </div>
        </div>
        <div className="form-body">
          <div className="body-title">Welcome Back!</div>
          <div className="body-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <Form>
            <Form.Floating className="mb-3">
              <Form.Control id="floatingEmail" type="email" placeholder="name@example.com" />
              <label htmlFor="floatingEmail">Email address</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control id="floatingPassword" type="password" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </Form.Floating>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Login;
