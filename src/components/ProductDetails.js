import React, { Component, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { AddItemToCart } from '../action/Action';
import { BreadcrumbList, Loader } from '../common/Common';
import ProductSlider from '../common/ProductSlider';
import { BagIcon, MinusIcon, PlusIcon, Start, StartO } from '../common/Svg';
 const ProductDetails = (props) => {
    const location = useLocation()
    console.log(location,  'props----')
    const {state} = location
    const navigate = useLocation()
    const dispatch  = useDispatch()
    const addItemToCart = (data) => dispatch(AddItemToCart(data))
    return <div>
        <BreadcrumbList url={navigate}/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <ProductSlider images={state.images}/>
                    </div>
                    <div className='col-md-7 ps-5'>
                        <div className='prodct-detail'>
                            <h2 className="fw-bold">{state.title}</h2>
                            <h4 className="tt-price">{state.price}</h4>
                            <div className="product-rating mb-4">
                                <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <Start className="me-2" />
                            </div>
                            <div className="tt-wrapper mb-4">{state.description}</div>
                            <div className="d-flex">
                                <div className="tt-input-counter style-01 me-3">
                                    <span className='cursor-pointer'><MinusIcon /></span>
                                    <input type="text" onChange={() => alert('dd')} value="1" size="5" />
                                    <span className='cursor-pointer'><PlusIcon /></span>
                                </div>
                                <button className="btn btn-main py-3 px-3" onClick={() => addItemToCart(state)}>
                                    <BagIcon/> Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 }

export default ProductDetails









