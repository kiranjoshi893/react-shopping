import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = () => {
    return(
        <Link to="/">
            <div className='home-card'>
                <img src="https://images.herzindagi.info/image/2022/May/sustainable-shopping-bags.jpg" className='w-100'/>
                <div className='home-card-caption'>
                    <h6>Starting from ₹ 400</h6>
                    <h3>Shop for Men</h3>
                    <button className="btn">Shop</button>
                </div>
            </div>
        </Link>
    )
} 
export default HomeCard