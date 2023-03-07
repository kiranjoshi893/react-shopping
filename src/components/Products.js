import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { AllProductList } from '../action/Action';
import { BreadcrumbList, Loader } from '../common/Common';
import { getAllProduct, getProductByfilter } from '../services/Auth';
import ProductList from './ProductList';
 const Products = (props) => {
    const navigate = useLocation()
    const getProductList = useSelector((state) => state.AllProductStore)
    console.log(getProductList, 'getProductList11112')
    useEffect(() => {
        getAllProduct()
        console.log(navigate, 'navigation')
    },[])
    const getProductByCategory = (data) => {
        getProductByfilter(data)
    }
    return <div>
        <BreadcrumbList url={navigate}/>
        <div className='container'>
            {/* <button onClick={() => getProductByCategory('/?categoryId=2')} className='btn btn-main mb-4'>get cloth category data</button> */}
            {getProductList.productListWait ? <Loader /> : ''}
            <div className='row'>
                <div className='col-md-2'>
                    <h5 className="border-bottom pb-3">Search by Category</h5>
                </div>
                <div className='col-md-10'>
                    <div className='row'>
                        {getProductList.productList?.map((data) => {
                            return (
                                <div className="col-md-3 mb-4 pb-3" key={data.id}><ProductList data={data}/></div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* {getProductList?.AllProductStore?.productList?.map((data) => {return (<div>sadasdasd</div>)})} */}
        </div>
    </div>
 }

export default Products