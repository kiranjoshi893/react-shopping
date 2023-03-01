import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { AllProductList } from '../action/Action';
import { BreadcrumbList, Loader } from '../common/Common';
import { getAllProduct } from '../services/Auth';
import ProductList from './ProductList';
 const Products = (props) => {
    const navigate = useLocation()
    const getProductList = useSelector((state) => state)
    console.log(getProductList.AllProductStore.productList, 'getProductList1111')
    const dispatch= useDispatch()
    const storeProductList = (data) => dispatch(AllProductList(data))
    useEffect(() => {
        getAllProduct()
        storeProductList()
        console.log(navigate, 'navigation')
    },[])
    return <div>
        <BreadcrumbList url={navigate}/>
        <div className='container'>
            {getProductList.AllProductStore.productListWait ? <Loader /> : ''}
            <div className='row'>
                {getProductList.AllProductStore.productList?.map((data) => {
                    return (
                        <div className="col-md-3 mb-4 pb-3" key={data.id}><ProductList data={data}/></div>
                    )
                })}
            </div>
            {/* {getProductList?.AllProductStore?.productList?.map((data) => {return (<div>sadasdasd</div>)})} */}
        </div>
    </div>
 }

export default Products