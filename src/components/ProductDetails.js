import React, { Component, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { BreadcrumbList, Loader } from '../common/Common';
 const ProductDetails = (props) => {
    const navigate = useLocation()
    return <div>
        <BreadcrumbList url={navigate}/>
        <div className='container'>
            details
            </div>
        </div>
 }

export default ProductDetails