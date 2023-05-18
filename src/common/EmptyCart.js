import React from 'react'
import emptyCartImage from './../images/empty-cart.png'
import { useNavigate } from 'react-router'
import { CustomDiv } from './StyleComponent';


const EmptyCart = () => {
    const navigate = useNavigate();
    return(
        <CustomDiv className='text-center py-5 empty-cart-wrapper'>
            <img src={emptyCartImage} />
            <h3 className='mt-5 mb-4 fw-bold'>Your cart is empty!</h3>
            <button className='btn btn-main px-4' onClick={() => navigate("/")}>Continue Shopping</button>
        </CustomDiv>
    )
}

export default EmptyCart 