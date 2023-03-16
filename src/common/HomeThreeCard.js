import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeThreeCard = (props) => {
    const {data} = props
    console.log(data, 'HomeThreeCard')
    const navigate = useNavigate();
    // const handleOnClick = (data) => {
    //     navigate(`/products/`,  {state:data})
    // };
    return(
        <Link to="/products/" state={data}>
        <div className="cursor-pointer" key={data.id}>
            <div className='home-card'>
                <img src={data?.image} className='w-100'/>
                <div className='home-card-caption'>
                    <h6>Shop by category</h6>
                    <h3>{data?.name}</h3>
                    <Link className="btn" to="/products/" state={data}>Shop</Link>
                </div>
            </div>
        </div>
        </Link>
    )
} 
export default HomeThreeCard