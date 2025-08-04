import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useLocation } from "react-router-dom";

import "../css/Navbar.css";

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/event" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Members", path: "/member" },
    { name: "Donation ", path: "/contribute" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`} style={{fontSize: "21px"}}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center site-title">
          <h6 className="mb-0 text-white text-nowrap" style={{fontSize: "21px"}}>
            स्वकुळ साळी सेवा समाज, नाशिकरोड
          </h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" className="border-0" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item) => (
              <Nav.Link
                as={NavLink}
                to={item.path}
                key={item.path}
                className={`nav-item-link ${location.pathname === item.path ? "active" : ""
                  }`}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
