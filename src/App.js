import React, {useEffect, useState} from 'react';
import Login from './components/Login';
import Header from './common/Header';
import Signup from './components/SignUp';
import './style.css';
import { BrowserRouter, Redirect, Route, Routes, useHistory, Navigate, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import { Outlet, useLocation, useNavigate } from 'react-router';
import ProtectedRoute from './common/ProtectedRoute';
import { useSelector } from 'react-redux';
import Products from './components/Products';
import NavigationRoutes from './common/NavigationRoutes';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './common/Footer';
// import { Navigate } from 'react-router-dom';

export default function App(props) {
  console.log(process.env, "asdasd");
  const getState = useSelector((state) => state.LoginStore.isLogin)
  console.log(getState,  'getState')
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location,'navigate111111')
  const [isFooter, setIsFooter] = useState(true)
  const PrivateRoute = () => {
    return getState ? <Outlet /> : <Navigate to="/login" />;
  }
  
  return (
    <div>
      {/* <BrowserRouter> */}
      <div>
      ewerwr
    </div>
    </div>
  );
}
