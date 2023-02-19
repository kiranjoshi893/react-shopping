import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Start, StartO } from '../common/Svg';


 const ProductList = (props) => {
    const getData = props.data
    console.log(getData, 'props::::::::::')
    return (
        <div className="product-wrap mb-25" key={getData.id}>
            <div className="product-img">
                <Link href="/product/1">
                    <img className="w-100" src={getData.images[0]} alt="" />
                </Link>
            </div>
            <div className="product-content text-center">
                <h5 className='font-weight-bold mb-3'>
                    <Link to="/product/1">{getData.title}</Link>
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
            </div>
        </div>
    )
 }

export default ProductList