import React from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const dispatch = useDispatch()
  const getState = ((state) => state.LoginStore.isLogin)
  return (
    <Navbar bg="white py-3" expand="lg" className='mb-4'>
      <div className="container">
        <Navbar.Brand className='mr-4 pe-5'>Kk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/products">Products</Link>
            <Link className='nav-link' to="/products">Mens</Link>
            <Link className='nav-link' to="/products">Womens</Link>
            <Link className='nav-link' to="/products">Kids</Link>
          </Nav>
          <Nav className="ms-auto">
            {!getState ? 
              <>
                <Link className='nav-link' to="/login">Login</Link>
                <Link className='nav-link' to="/signup">SignUp</Link>
              </> 
               :
               <Link className='nav-link' to="/login">Logout</Link>
            }
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header