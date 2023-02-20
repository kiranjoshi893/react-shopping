import React, { Component, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { BreadcrumbList, Loader } from '../common/Common';
import ProductSlider from '../common/ProductSlider';
 const ProductDetails = (props) => {
    const navigate = useLocation()
    return <div>
        <BreadcrumbList url={navigate}/>
            <div className='container'>
                <div className='col-md-5'>
                    <ProductSlider />
                </div>
                <div className='col-md-7'></div>
            </div>
        </div>
 }

export default ProductDetails









