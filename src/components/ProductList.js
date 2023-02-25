import React, { Component, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BagIcon, MinusIcon, PlusIcon, Start, StartO } from '../common/Svg';


 const ProductList = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const getData = props.data
    console.log(getData, 'props::::::::::')
    const [qty, setQty] = useState('')
    const [error, setError] = useState(false)
    const goToDetailPage = (data) => {
        const filtertedURL = data.title.split(' ').join('-')
        console.log(filtertedURL, 'filtertedURL')
        navigate(`${filtertedURL}`, {state:data})
    }
    const onChangeHandler = (e) => {
        console.log(e, '44444444444')
        if(e > 10){
            setError('Qty can not be more than 10')
        }
        else if(e < 0){
            setQty(e)
            setError('Qty can not be less than 1')
        }
        else{
            setQty(e)
            cartQtyChange(e)
            setError('')
        }
    }
    return (
        <div className="product-wrap border h-100 mb-25" key={getData.id}>
            <div className="product-img">
                {/* <Link to={`${location.pathname}/${getData.id}`}></Link> */}
                <span className='cursor-pointer' onClick={() => goToDetailPage(getData)}>
                    <img className="w-100" src={getData.images[0]} alt="" />
                </span>
            </div>
            <div className="product-content text-center">
                <h5 className='font-weight-bold mb-3'>
                    <Link to="/">{getData.title}</Link>
                </h5>
                <div className="product-rating">
                    <StartO className="yellow me-2"/>
                    <StartO className="yellow me-2"/>
                    <StartO className="yellow me-2"/>
                    <StartO className="yellow me-2"/>
                    <Start className="me-2" />
                </div>
                <div className="product-price mt-3">
                    <h5>${getData.price}</h5>
                    <span className="old">{getData.category.name}</span>
                </div>
                <button className="mt-3 btn btn-main px-3 py-2 w-100">Add To Cart</button>
            </div>
        </div>
    )
 }

export default ProductList