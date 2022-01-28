import React from "react";
import {Navbar as BootstrapNavbar, Container, Nav, NavDropdown} from "react-bootstrap";
import BrandLogo from "../../assets/images/logo.png";

import "./Navbar.scss";

function Navbar() {
  return (
    <BootstrapNavbar variant="light" expand="lg" fixed="top">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <img src={BrandLogo} alt="Medical Tourism Indonesia" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="pull-right">
          <NavDropdown title="Hotel Himalaya" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;