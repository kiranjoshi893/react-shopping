import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../common/Common';
import ProductList from './ProductList';
 const Products = () => {
    // const getProductList = useSelector((state) => state)
    const getProductList = useSelector((state) => state)
    console.log(getProductList.AllProductStore.productList, 'getProductList1111')
    return <div className='container'>
        {getProductList.AllProductStore.productListWait ? <Loader /> : ''}
        <div className='row'><ProductList /></div>
        {/* {getProductList?.AllProductStore?.productList?.map((data) => {return (<div>sadasdasd</div>)})} */}
    </div>
 }

export default Products