import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { AllCategories, AllProductList, ItemAddToCart } from '../action/Action';
import { BreadcrumbList, Loader } from '../common/BreadcrumbList';
import FilterComponent from '../common/FilterComponent';
import { getAllCategories, getAllProduct, getProductByfilter } from '../services/Auth';
import ProductList from './ProductList';
import {SuccessNotification} from '../common/Common'

 const Products = (props) => {
    const location = useLocation()
    const {state} = location
    console.log(state, 'propsprops111')
    const [clearFilter, setClearFilter] = useState('')
    const [showToast, setShowToast] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getProductList = useSelector((state) => state.AllProductStore)
    const getDataFromStore = useSelector((state) => state.getAllCategories)
    const cartItemList = useSelector((state) => state.ItemAddTOCart.toast)

    const itemsAddToCart = (data) => dispatch(ItemAddToCart(data))
    console.log(cartItemList, 'getDataFromStore11')
    const getCategoryData = (data) => {
        getProductByfilter(data)
        setClearFilter(data)
        console.log(data, clearFilter, 'clearFilter111')
    }
    const clearAllFilter = () => {
        setClearFilter('')
        navigate(location.pathname, { replace: true });
    }
    const itemsToCart = (data) =>{
        setShowToast(true)
        itemsAddToCart(data)
    }
    useEffect(() => {
        getAllCategories('/')
        getProductByfilter(state?.id)
        setClearFilter(state?.id)
    },[])
    useEffect(() => {
        setTimeout(() => setShowToast(false), 1000)
    },[cartItemList])
    return <div>
        <BreadcrumbList url={location}/>
        {/* {showToast ? 'true' : 'false'} */}
        {showToast ? <SuccessNotification text="Item added to cart" bg="success"/> : ''}
        <div className='container'>
            {getProductList.productListWait ? <Loader /> : ''}
            <div className='row'>
                <div className='col-md-2'>
                    <FilterComponent category={getDataFromStore.list} categoryState={state} clearAllFilter={() => clearAllFilter()} getCategoryData={(data) => getCategoryData(data)} clearFilter={clearFilter}/>
                </div>
                <div className='col-md-10'>
                    <div className='row'>
                        {getProductList?.productList?.map((data) => {
                            return (
                                <div className="col-md-3 mb-4 pb-3" key={data.id}><ProductList data={data} itemsToCart={(data) => itemsToCart(data)} showToast={showToast}/></div>
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