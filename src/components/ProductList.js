import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AllProductList } from '../action/Action';
import { Start, StartO } from '../common/Common';
import { getAllProduct } from '../services/Auth';
// import {db} from '../firebase';
// import {collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from 'firebase/firestore';

 const ProductList = () => {
    const getProductList = useSelector((state) => state)
    console.log(getProductList.AllProductStore.productList, 'getProductList1111')
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
        <>{getProductList?.AllProductStore?.productList?.map((data) => {
            return (
                <div className="col-md-4 mb-4 pb-3" key={data.id}>
                    <div className="product-wrap mb-25">
                        <div className="product-img">
                            <Link href="/product/1">
                                <img className="w-100" src={data.images[0]} alt="" />
                            </Link>
                        </div>
                        <div className="product-content text-center">
                            <h5 className='font-weight-bold mb-3'>
                                <Link to="/product/1">{data.title}</Link>
                            </h5>
                            <div className="product-rating">
                                <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <StartO className="yellow me-2"/>
                                <Start className="me-2" />
                            </div>
                            <div className="product-price mt-3">
                                <h5>${data.price}</h5>
                                <span className="old">{data.category.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
            })}
        </>
    )
 }

export default ProductList