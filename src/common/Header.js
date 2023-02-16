import React from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="light" expand="lg" className='mb-4'>
      <div className="container">
        <Navbar.Brand>Dummy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/products">Products</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="ms-auto">
            <Link className='nav-link' to="/login">Login</Link>
            <Link className='nav-link' to="/signup">SignUp</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header