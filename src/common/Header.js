import React, { useState } from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import NavigationRoutes from './NavigationRoutes'

function Header() {
  console.log(NavigationRoutes, 'NavigationRoutes')
  const getState = ((state) => state.LoginStore.isLogin)
  const [show, setShow] = useState(true)
  return (
    <Navbar bg="white py-2" expand="lg" className='mb-4'>
      <div className="container">
        <Navbar.Brand className='mr-4 pe-5'>Kk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NavigationRoutes.map((data) => {
              return (
              <div key={data.name}>
                {!data?.subNav ? <Link className='nav-link' to={data.path}>{data.name}</Link>
                   : <>
                    {data?.subNav ? 
                      <NavDropdown show={show}  title={data.name} className={show ? 'navshow' : 'navhide'} id="basic-nav-dropdown" >
                        {data?.subNav?.map((data) => 
                          <Link key={data.name} className='nav-link' to={data.path}>{data.name}</Link>)
                        }
                    </NavDropdown> 
                    : '' } 
                  </>}
              </div>)
            })}
          </Nav>
          {/* {data?.subNav?.map((data) => { */}
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