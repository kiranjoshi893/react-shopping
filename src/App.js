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
      <Header />
      <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
          {NavigationRoutes.map((data) => {
            return <Route key={data.name} exact path={data.path} element={data.Component}/>
          })}
          <Route path="/products/:id" element={<ProductDetails />}/>
          <Route path="/cart" element={<Cart />}/>
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        {/* <Route path="/admin/create" exact element={<CreateList />} /> */}
        {/* <Route exact path='/' element={<ProtectedRoute Component={Home} />} /> */}
      </Routes>
      {getState ? <Footer /> : '' }
    </div>
    </div>
  );
}
