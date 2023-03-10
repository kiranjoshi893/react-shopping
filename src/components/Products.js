import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { AllCategories, AllProductList } from '../action/Action';
import { BreadcrumbList, Loader } from '../common/Common';
import FilterComponent from '../common/FilterComponent';
import { getAllCategories, getAllProduct, getProductByfilter } from '../services/Auth';
import ProductList from './ProductList';
 const Products = (props) => {
    const navigate = useLocation()
    const getProductList = useSelector((state) => state.AllProductStore)
    const getDataFromStore = useSelector((state) => state.getAllCategories)
    console.log(getDataFromStore, 'getDataFromStore')
    useEffect(() => {
        getAllProduct()
        getAllCategories('/')
    },[])
    return <div>
        <BreadcrumbList url={navigate}/>
        <div className='container mt-5'>
            {/* <button onClick={() => getProductByCategory('/?categoryId=2')} className='btn btn-main mb-4'>get cloth category data</button> */}
            {getProductList.productListWait ? <Loader /> : ''}
            <div className='row'>
                <div className='col-md-2'>
                    <FilterComponent category={getDataFromStore.list}/>
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