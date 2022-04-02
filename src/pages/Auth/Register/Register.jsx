/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import "./Register.scss";
import { Email, Name, Password, Confirmation, Confirmed } from "./Component";
import Logo from "../../../assets/images/logo.png";
import FormHeader from "../../../assets/images/form-header.png";

const Register = () => {
  const { search } = useLocation();
  const step = new URLSearchParams(search).get("step");
  const [content, setContent] = useState();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (step == null || step == 1) {
      setContent(<Email />);
    } else if (step == 2) {
      setContent(<Name />);
    } else if (step == 3) {
      setContent(<Password />);
    } else if (step == 4) {
      setContent(<Confirmation />);
      setShowHeader(false);
    } else if (step == 5) {
      setContent(<Confirmed />);
      setShowHeader(false);
    } else {
      setContent(<Email />);
    }
  }, [step]);

  return (
    <div className="register-wrapper">
      <Container>
        <div className="register-form">
          <div className="form-header">
            {showHeader && (
              <div className="header-background">
                <img src={FormHeader} alt="header" />
              </div>
            )}
            <div className="header-logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>
          {content}
        </div>
      </Container>
    </div>
  );
};

export default Register;
