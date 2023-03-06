import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation} from 'react-router'
import { AllProductList } from '../action/Action'
import { BreadcrumbList } from '../common/Common'
import HomeCard from '../common/HomeCard'
import { getAllCategories} from '../services/Auth'
import bannerImage from './../images/banner.jpg'

function Home(props) {
  const navigate = useLocation()
  console.log(navigate.pathname, 'history1111')
  const dispatch= useDispatch()
  const getProductList = useSelector((state) => state.getAllCategories.list)
  const filterItems = getProductList
  useEffect(() => {
    getAllCategories()
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
        {getProductList?.slice(0, 3).map((data) => {
            return (
              <div className="col-md-4" key={data.id}><HomeCard /></div>
            )
        })}
        </div>
      </div>
    </>
    </>
  )
}

export default Home