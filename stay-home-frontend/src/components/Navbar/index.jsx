import React from "react";
import "./index.css";
import logo from "../../../public/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SiteNavbar() {
  return (
    <Container fluid className="navMainClass">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" className="logoImg" />
      </Navbar.Brand>

      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item className="navItem">
          <Link to="/volunteer" className="navLink">Volunteer</Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Link to="/patient" className="navLink">Patient</Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Link to="/signup" className="navLink">Sign Up</Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
