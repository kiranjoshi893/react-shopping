import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../common/Common';
import ProductList from './ProductList';
 const Products = () => {
    const getProductList = useSelector((state) => state)
    return <div>
        {getProductList.AllProductStore.prouctListWait ? <Loader /> : ''}
        <ProductList />
    </div>
 }

export default Products