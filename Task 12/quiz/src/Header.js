import React from 'react';//Importing react module
import Nav from 'react-bootstrap/Nav';//Importing Nav from react-bootstrap//
import Navbar from 'react-bootstrap/Navbar';//Importing Navbar from react-bootstrap//
import Container from 'react-bootstrap/Container';//Importing Container from react-bootstrap//
import NavDropdown from 'react-bootstrap/NavDropdown';//Importing Navdropdown from react-bootstrap//

function Header () {//Using components from react-bootstrap//
    return(
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown.Item href="/Quiz">Quiz</NavDropdown.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Help">Help</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header;