import React from 'react'
import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div>
        <Navbar bg="secondary" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">
    <img 
    src='./assets/img/LogoWeb.png'
    width="40"
    height="40"
    className="d-inline-block aling-top"
    alt="Logo"
    /> Buffalo beer
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Buffalo<CartWidget /></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Contact</Nav.Link>
          <Nav.Link href="#action4">About us</Nav.Link>
            
          
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar

