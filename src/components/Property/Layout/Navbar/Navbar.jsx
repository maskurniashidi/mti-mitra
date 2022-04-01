import React from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Dropdown,
} from "react-bootstrap";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import BrandLogo from "../../../../assets/images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <BootstrapNavbar variant="light" expand="lg" fixed="top">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <img src={BrandLogo} alt="Medical Tourism Indonesia" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="pull-right">
          <Dropdown>
            <div className="nav-dropdown">
              <div className="nav-avatar">HH</div>
              <div className="nav-profile">
                <span className="property-name">Hotel Himalaya</span>
                <span className="account">stefanusirgy2202@gmail.com</span>
              </div>
              <Dropdown.Toggle as="a" id="dropdown-basic">
                <IoChevronDownOutline />
              </Dropdown.Toggle>
            </div>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/login">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
