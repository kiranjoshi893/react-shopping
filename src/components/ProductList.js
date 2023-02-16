import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllProductList } from '../action/Action';
import { getAllProduct } from '../services/Auth';
// import {db} from '../firebase';
// import {collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from 'firebase/firestore';

 const ProductList = () => {
    const getProductList = useSelector((state) => state)
    console.log(getProductList, 'getProductList')
    const dispatch= useDispatch()
    const storeProductList = (data) => dispatch(AllProductList(data))
    // const [getData, setGetData] = useState([])
    // const useCollectionRef = collection(db, 'users')
    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(useCollectionRef)
    //         const test = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    //         setGetData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //         console.log(test, 'kiran::::::')
    //     }
    //     getUsers()
    // }, []);
    // return <div className='container'>
    //     {getData.map((data) => {return <div className='prd-list py-3 bg-light px-4' key={data.id}>
    //         <p className='mb-2'>{data.name}</p>
    //         <p className='mb-0'>{data.age}</p>
    //     </div>})}
    // </div>
    useEffect(() => {
        getAllProduct()
        storeProductList()
    }, [])

    return (
        <div className="col-md-4">
        <div className="product-wrap mb-25">
            <div className="product-img">
                <a href="/product/1">
                <img className="default-img" src="/assets/img/product/fashion/1.jpg" alt="" />
                <img className="hover-img" src="/assets/img/product/fashion/3.jpg" alt="" />
                </a>
                <div className="product-img-badges">
                <span className="pink">-10%</span>
                </div>
                <div className="product-action">
                <div className="pro-same-action pro-wishlist">
                    <button className="" title="Add to wishlist">
                    <i className="pe-7s-like"></i>
                    </button>
                </div>
                <div className="pro-same-action pro-cart">
                    <a href="/product/1">Select Option</a>
                </div>
                <div className="pro-same-action pro-quickview">
                    <button title="Quick View">
                    <i className="pe-7s-look"></i>
                    </button>
                </div>
                </div>
            </div>
            <div className="product-content text-center">
                <h3>
                <a href="/product/1">Lorem ipsum jacket</a>
                </h3>
                <div className="product-rating">
                <i className="fa fa-star-o yellow"></i>
                <i className="fa fa-star-o yellow"></i>
                <i className="fa fa-star-o yellow"></i>
                <i className="fa fa-star-o yellow"></i>
                <i className="fa fa-star-o"></i>
                </div>
                <div className="product-price">
                <span>€11.2</span>
                <span className="old">€12.45</span>
                </div>
            </div>
            </div>
        </div>
    )
 }

export default ProductList