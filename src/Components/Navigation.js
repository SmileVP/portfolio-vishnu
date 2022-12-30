import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    //  <--Navigation details-->
    <div className="navigation container-fluid">
      <Navbar bg="#0E1630" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ color: "white", fontSize: "2em" }}>
            <span className="color-green">V</span>ishnuPriya
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "10em", gap: "3em", color: "red" }}
              navbarScroll
            >
              <Nav.Link href="#home" style={{ color: "#808DAD" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: "#808DAD" }}>
                About
              </Nav.Link>
              <Nav.Link href="#Skills" style={{ color: "#808DAD" }}>
                Skills
              </Nav.Link>
              <Nav.Link href="#Projects" style={{ color: "#808DAD" }}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" style={{ color: "#808DAD" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
