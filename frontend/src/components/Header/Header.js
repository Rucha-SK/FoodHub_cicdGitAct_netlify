import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import "./Header.css"


const Header = () => {
  
  return (
      <Navbar >
        <Navbar.Brand href="/">FoodHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ml-auto'>
          <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/register"><Button variant="light">Signup</Button></NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}



export default Header;