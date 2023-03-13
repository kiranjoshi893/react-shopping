import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { AllCategories, AllProductList } from '../action/Action';
import { BreadcrumbList, Loader } from '../common/Common';
import FilterComponent from '../common/FilterComponent';
import { getAllCategories, getAllProduct, getProductByfilter } from '../services/Auth';
import ProductList from './ProductList';
 const Products = (props) => {
    const location = useLocation()
    const {state} = location
    console.log(state, 'propsprops111')
    const [clearFilter, setClearFilter] = useState('')
    const navigate = useNavigate()
    const getProductList = useSelector((state) => state.AllProductStore)
    const getDataFromStore = useSelector((state) => state.getAllCategories)
    console.log(getDataFromStore, 'getDataFromStore')
    const getCategoryData = (data) => {
        getProductByfilter(data)
        setClearFilter(data)
        console.log(data, clearFilter, 'clearFilter111')
    }
    const clearAllFilter = () => {
        setClearFilter('')
        navigate(location.pathname, { replace: true });
    }
    useEffect(() => {
        getAllCategories('/')
        getProductByfilter(state?.id)
        setClearFilter(state?.id)
    },[])

    return <div>
        <BreadcrumbList url={location}/>
        <div className='container'>
            {getProductList.productListWait ? <Loader /> : ''}
            <div className='row'>
                <div className='col-md-2'>
                    <FilterComponent category={getDataFromStore.list} categoryState={state} clearAllFilter={() => clearAllFilter()} getCategoryData={(data) => getCategoryData(data)} clearFilter={clearFilter}/>
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