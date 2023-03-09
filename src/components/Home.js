import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation} from 'react-router'
import { AllProductList } from '../action/Action'
import { BreadcrumbList } from '../common/Common'
import Footer from '../common/Footer'
import HomeThreeCard from '../common/HomeThreeCard'
import { getAllCategories, getAllProduct} from '../services/Auth'
import bannerImage from './../images/banner.jpg'
import ProductList from './ProductList'

const Home = (props) => {
  const navigate = useLocation()
  const dispatch= useDispatch()
  const getProductList = useSelector((state) => state)
  const filterItems = getProductList
  console.log(getProductList, 'history1111')
  useEffect(() => {
    getAllCategories()
    getAllProduct()
  },[])
  return (<>
    <BreadcrumbList url={navigate}/>
    <>
      <div className='home-banner position-relative'>
        <img src={bannerImage} className="w-100"/>
        <div className='banner-caption'>
          <h1 className="mb-0">Winter Offers</h1>
          <h3 className="mb-4">Get upto 40% </h3>
          <button className='btn btn-shoping'>Shop Now</button>
        </div>
      </div>
      <div className='container'>
        <div className='row mt-4'>
        {getProductList.getAllCategories.list?.slice(0, 3)?.map((data) => {
            return (
              <div className="col-md-4" key={data.id}><HomeThreeCard data={data}/></div>
            )
        })}
        </div>
        <div className='latest-products mt-5 pt-5'>
          <h6 className='text-center text-main mb-2 fw-lighter'><i>New Collection</i></h6>
          <h2 className='text-center pb-4 heading'><span>New Arrivals</span></h2>
          <div className='row mt-4'>
            {getProductList.AllProductStore.productList?.slice(0, 8)?.map((data) => {
                return (
                  <div className="col-md-3 mb-4 pb-3" key={data.id}><ProductList showAddToCart={false} data={data}/></div>
                )
            })}
            </div>
        </div>
      </div>
    </>
    </>
  )
}

export default Home