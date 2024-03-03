import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  // Get the current location
  const location = useLocation();

  // Determine if the location matches the path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar style={{padding:"0px"}} expand="lg" className="bg-body-tertiary">
      <Container fluid style={{ backgroundColor: "gray", padding: "0px", height: "150px" }}>
        <Navbar.Brand href="/" style={{ fontSize: 48, color: "white", margin: "10px"}}>Josh Alland</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ backgroundColor: "gray" }} id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ fontSize: 28, justifyContent: "flex-end" }}>
            <Nav.Link style={{ color: isActive('/about') ? 'black' : 'white' }} href="/">About</Nav.Link>
            <Nav.Link style={{ color: isActive('/portfolio') ? 'black' : 'white' }} href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link style={{ color: isActive('/contact') ? 'black' : 'white' }} href="/contact">Contact</Nav.Link>
            <Nav.Link style={{ color: isActive('/resume') ? 'black' : 'white' }} href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;