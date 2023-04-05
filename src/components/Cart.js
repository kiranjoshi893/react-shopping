import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { ItemDecrease, ItemIncrease, ItemRemoveToCart } from '../action/Action';
import { BreadcrumbList } from '../common/BreadcrumbList';
import { CloseIcon, MinusIcon, PlusIcon } from '../common/Svg';
 const Cart = () => {
    const navigate = useLocation()
    const getData = useSelector(data => data.ItemAddTOCart.items)
    const storeState = useSelector((state) => state.AddToCart)
    const dispatch = useDispatch()
    const itemIncrement = (data) => dispatch(ItemIncrease(data))
    const itemDecrease = (data) => dispatch(ItemDecrease(data))
    const removeItem = (data) => dispatch(ItemRemoveToCart(data))
    console.log(storeState,  'getData::::')
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
                            <div key={item.id} className='row cart-list d-flex justify-content-between'>
                                <div className='col-md-3'>
                                    <img src={item.images[0]} />
                                </div>
                                <div className='col-md-4'>
                                    <h5 className='text-secondary'>{item.title}</h5>
                                    <h5 className='text-main mt-3 fw-bold'>₹ {item.price * item.qty}</h5>
                                </div>
                                <div className='col-md-3'>
                                    <div className='cart-qty d-flex float-end'>
                                        <button className='btn' disabled={item.qty <= 1} onClick={() => itemDecrease(item)}><MinusIcon /></button>
                                        <input type='text' value={item.qty} onChange={() => console.log('s')} className="form-control"/>
                                        <button className='btn' disabled={item.qty >= 10} onClick={() => itemIncrement(item)}><PlusIcon /></button>
                                    </div>
                                    {item.qty > 11 ? 'Quantity can not be more than 10' : ''}
                                    {item.qty < 0 ? 'Quantity can not be less than 1' : ''}
                                </div>
                                <div className='col-md-2 text-danger text-end cursor-pointer' onClick={()=> removeItem(item)}>Remove</div>
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