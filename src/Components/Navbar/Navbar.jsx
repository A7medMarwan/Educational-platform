import React from "react";
import Style from "./Navbar.module.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar dir="ltr" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            alt="Logo"
            width="80"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="المقررات الدراسية" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/math151"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ١٥١
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math152"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ١٥٢
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math253"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٢٥٣
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math261"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٢٦١
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math362"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٣٦٢
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math364"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٣٦٤
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math352"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٣٥٢
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math262"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٢٦٢
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math366"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٣٦٦
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math365"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٣٦٥
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math263"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٢٦٣
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/math363"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ريض ٣٦٣
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              الرئيسية
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
