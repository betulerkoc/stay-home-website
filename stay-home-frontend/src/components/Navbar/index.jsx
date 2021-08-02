import React from "react";
import "./index.css";
import logo from "../../../public/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function SiteNavbar() {
  return (
    <Container fluid className="navMainClass">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" className="logoImg" />
      </Navbar.Brand>

      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/volunteer" className="navLink">
            Volunteer
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/patient" className="navLink">
            Patient
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup" className="navLink justify-content-end">
            Sign Up
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
