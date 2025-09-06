import React from "react";
import Style from "./Navbar.module.css";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function MyNavbar() {
  const { isLoggedIn, userRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

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
            {isLoggedIn && userRole === "admin" ? (
              <Button
                onClick={handleLogout}
                className="ms-2"
                style={{
                  background:
                    "linear-gradient(90deg, #dc3545 60%, #c82333 100%)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.5rem 1.5rem",
                  fontWeight: "bold",
                  color: "#fff",
                  boxShadow: "0 2px 8px rgba(220,53,69,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #c82333 60%, #bd2130 100%)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 12px rgba(220,53,69,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #dc3545 60%, #c82333 100%)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 2px 8px rgba(220,53,69,0.3)";
                }}
              >
                تسجيل الخروج
              </Button>
            ) : (
              <Button
                onClick={handleLogin}
                className="ms-2"
                style={{
                  background:
                    "linear-gradient(90deg, #0d2c1f 60%, #1e8c59 100%)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.5rem 1.5rem",
                  fontWeight: "bold",
                  color: "#fff",
                  boxShadow: "0 2px 8px rgba(30,140,89,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #1e8c59 60%, #2d9a6b 100%)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 12px rgba(30,140,89,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #0d2c1f 60%, #1e8c59 100%)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 2px 8px rgba(30,140,89,0.3)";
                }}
              >
                تسجيل الدخول
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
