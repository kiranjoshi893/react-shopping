import React from 'react'
import { Link } from 'react-router-dom'

const HomeThreeCard = (props) => {
    const {data} = props
    console.log(data, 'HomeThreeCard')
    return(
        <Link to="/" key={data.id}>
            <div className='home-card'>
                <img src={data.image} className='w-100'/>
                <div className='home-card-caption'>
                    <h6>Shop by category</h6>
                    <h3>{data.name}</h3>
                    <button className="btn">Shop</button>
                </div>
            </div>
        </Link>
    )
} 
export default HomeThreeCard