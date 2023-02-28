import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { BreadcrumbList } from '../common/Common';
import { CloseIcon, MinusIcon, PlusIcon } from '../common/Svg';
 const Cart = () => {
    const navigate = useLocation()
    const getData = useSelector(data => data.ItemAddTOCart.items)
    console.log(getData,  'getData')
    return (
        <>
        <BreadcrumbList url={navigate}/>
            <div className='container'>
                <div className="row">
                    <div className='col-md-8'>
                        <h3 className='fw-bold'>Cart</h3>
                        <div className='cart-wrapper'>
                            {getData.map((item) => {
                            return (
                                <div key={item.id} className='cart-list d-flex justify-content-between'>
                                <div>
                                    <img src={item.images[0]} />
                                </div>
                                <div>
                                    <h5>{item.title}</h5>
                                    <div className='cart-qty d-flex'>
                                        <button className='btn'><PlusIcon /></button>
                                        <input type='text' value={item.qty} onChange={() => console.log('s')} className="form-control"/>
                                        <button className='btn'><MinusIcon /></button>
                                    </div>
                                    <h5 className='fw-bold text-main mt-3'>₹ {item.price}</h5>
                                </div>
                                <div>TOtal Amount</div>
                                <div className='text-danger cursor-pointer small'>Remove</div>
                            </div>
                            )})}
                        </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </>
    )
 }

 export default Cart