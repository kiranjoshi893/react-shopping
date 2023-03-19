import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { AddItemToCart, AddToCart, CartItem, CartQtyChange, IncreaseQty, ItemAddToCart, ItemDecrease, ItemIncrease } from '../action/Action';
import { BreadcrumbList, Loader } from '../common/BreadcrumbList';
import ProductSlider from '../common/ProductSlider';
import { BagIcon, MinusIcon, PlusIcon, Start, StartO } from '../common/Svg';
// import { getAllProduct } from '../services/Auth';
 const ProductDetails = (props) => {
    // const cartQty = useSelector((state) => state.AddToCart.cartQTY)
    const storeState = useSelector((state) => state.AddToCart)
    const location = useLocation()
    console.log(storeState,  'allProduct133')
    const {state} = location
    // const [qty, setQty] = useState(cartQty)
    const [error, setError] = useState(false)
    const navigate = useLocation()
    const dispatch  = useDispatch()
    const addItemToCart = (data) => dispatch(ItemAddToCart(data))
    // const increaseQty = (data) => dispatch(IncreaseQty(data))
    const cartItems = (data) => dispatch(CartItem(data))
    const cartQtyChange = (data) => dispatch(CartQtyChange(data))
    const itemIncrement = (data) => dispatch(ItemIncrease(data))
    const itemDecrease = (data) => dispatch(ItemDecrease(data))
    const onChangeHandler = (e) => {
        console.log(e, '44444444444')
        if(e > 10){
            setError('Qty can not be more than 10')
        }
        else if(e < 0){
            // setQty(e)
            setError('Qty can not be less than 1')
        }
        else{
            // setQty(e)
            cartQtyChange(e)
            setError('')
        }
    }
   
    useEffect(() => {
        cartItems(state)
        // getAllProduct()
    },[])
    return <div>
        <BreadcrumbList url={navigate}/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 mb-5'>
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
                                    <span className='cursor-pointer' onClick={() => itemDecrease(state)}><MinusIcon /></span>
                                    <input readOnly type="text" value={storeState.qty} onChange={(e) => onChangeHandler(e.target.value)} size="5" />
                                    <span className='cursor-pointer' onClick={() => itemIncrement(state)}><PlusIcon /></span>
                                </div>
                                <button disabled={storeState.qty == 0 || storeState.qty == 11} className="btn btn-main py-3 px-3" onClick={() => addItemToCart(state)}>
                                    <BagIcon/> Add To Cart
                                </button>
                            </div>
                            {error ? error : ''}
                            {storeState.error ? <p className='small text-danger mb-0 pt-1'>{storeState.error}</p> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
 }

export default ProductDetails









