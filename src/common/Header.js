import React, { useState } from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ItemRemoveToCart } from '../action/Action'
import NavigationRoutes from './NavigationRoutes'
import { BagIcon, CloseIcon } from './Svg'

function Header() {
  const getDataFromStore = useSelector(state => state.ItemAddTOCart)
  const {items} = getDataFromStore
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const removeItemsToCart = (data) => dispatch(ItemRemoveToCart(data))
  // const cartList = JSON.parse(localStorage.getItem('cartList')) ? JSON.parse(localStorage.getItem('cartList')) : [] 
  // console.log(cartList, 'NavigationRoutes')
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
               <>
               {items.length === 0 ? 
               <span className='cursor-pointer nav-link'><BagIcon /></span>
               : 
               <NavDropdown className='cart-dropdown' show={show}  title={<><BagIcon /><small className="badge rounded-pill bg-danger">{items.length}</small></>} id="basic-nav-dropdown">
                <div className='cart-dropdown-list'>
                  {items.slice(0, 4).map((data) => {
                    return (
                      <div key={data.id} className='cursor-pointer cart-sublist' onClick={() => navigate('/cart')}>
                        <div className='row'>
                          <div className='col-md-4'>
                            <img src={data.images[0]}  />
                          </div>
                          <div className="col-md-6 ps-0">
                            <p className='fw-bold mb-0'>{data.title}</p>
                            <p className="text-secondary mb-0">{data.qty}</p>
                          </div>
                          <div className='col-md-2 text-danger cursor-pointer'onClick={() => removeItemsToCart(data)}><CloseIcon /></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {items.length >= 4 ? <Link to="/cart" className='text-center nav-link border-top fs-6'>View all</Link> : ''}
              </NavDropdown>
               }

               <Link className='nav-link' to="/login">Logout</Link>
               </>
            }
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header