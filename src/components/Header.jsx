import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./header.css";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <>
     <Navbar bg="dark" expand="lg">
      <Container fluid>
 <Navbar.Brand href="#" className="text-white m-0 p-0"><img src={process.env.PUBLIC_URL+'/images/youtube.png'} alt="logo" className="youtube_logo"/><b>Youtube Clone</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            
          </Nav>
          <Form className="d-flex">
            
            <Button variant="outline-primary"><i class="far fa-user"></i>Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
      
    
  )
}

export default Header