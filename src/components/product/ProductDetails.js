import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";
import {AllItems, ItemAddToCart, ItemDecrease, ItemIncrease } from '../../action/Action';
import { BreadcrumbList, Loader } from '../../common/BreadcrumbList';
import ItemQtyIncreaseDecrease from '../../common/ItemQtyIncreaseDecrease';
import ProductSlider from './ProductSlider';
import { BagIcon, MinusIcon, PlusIcon, Start, StartO } from '../../common/Svg';
import { getAllProduct, getSingleProduct } from '../../services/Auth';
// import { getAllProduct } from '../services/Auth';
 const ProductDetails = (props) => {
    const storeState = useSelector((state) => state.AddToCart)
    const list = useSelector((state) => state.singleProduct.items)
    const {loading} = useSelector((state) => state.singleProduct)
    const location = useLocation()
    const {state} = location
    const navigate = useLocation()
    const dispatch  = useDispatch()
    const addItemToCart = (data) => dispatch(ItemAddToCart(data))
    const itemIncrement = (data) => dispatch(ItemIncrease(data))
    const itemDecrease = (data) => dispatch(ItemDecrease(data))
    const allItems = (data) => dispatch(AllItems(data))
    console.log(props, navigate, 'navigate')
    const {id} = useParams();
    console.log(list, 'testtesttesttesttest')
    useEffect(() => {
        allItems(storeState)
        getSingleProduct(id)
        getAllProduct()
    },[])
    return <div>
        {loading ? <Loader /> : 
        <>
        <BreadcrumbList url={navigate}/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 mb-5'>
                        <ProductSlider images={list.images}/>
                    </div>
                    <div className='col-md-7 ps-5'>
                        <div className='prodct-detail'>
                            <h2 className="fw-bold">{list.name}</h2>
                            <h4 className="tt-price">Rs. {list.original_price}</h4>
                            <p className="text-secondary mb-2">Category: {list.category}</p>
                            <p className="text-secondary">Color:   {list.color}</p>
                            <div className="product-rating mb-4">
                                <div class="stars-list" style={{'--rating': list.rating}} title={`Rating ${list.rating}`} aria-label={`Rating of this product is ${list.rating} out of 5.`}></div>
                                {/* <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <Start className="me-2" /> */}
                                {/* use of map */}
                                {/* react staga */}
                                {/* style component */}
                                {/* reactstrap */}
                                {/* test cases */}
                            </div>
                            <ItemQtyIncreaseDecrease/>
                        </div>
                    </div>
                </div>
            </div>
            </>}
        </div>
 }

export default ProductDetails








