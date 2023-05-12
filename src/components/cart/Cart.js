import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { ItemDecrease, ItemIncrease, ItemRemoveToCart } from '../../action/Action';
import { BreadcrumbList } from '../../common/BreadcrumbList';
import { CloseIcon, MinusIcon, PlusIcon } from '../../common/Svg';
import EmptyCart from '../../common/EmptyCart';
import ItemListOnCartPage from './ItemListOnCartPage';
import { Pagination } from 'react-bootstrap';
import Checkout from './Checkout';
 const Cart = () => {
    const navigate = useLocation()
    const getData = useSelector(data => data.ItemAddTOCart.items)
    const storeState = useSelector((state) => state.AddToCart)
    const dispatch = useDispatch()
    // function actionCreator(payload) {
    //     return dispatch => {
    //         dispatch(action1(payload))
    //         dispatch(action2(payload))
    //     }
    // }
    // const cartActionsPerform = (data, fu) => {
    //     dispatch(fn(data))
    // }
    const itemIncrement = (data) => dispatch(ItemIncrease(data))
    const itemDecrease = (data) => dispatch(ItemDecrease(data))
    const removeItem = (data) => dispatch(ItemRemoveToCart(data))
    console.log(getData,  'LoginHeader21312312344')
    return (
        <>
        <BreadcrumbList url={navigate}/>
            <div className='container'>
            {getData.length && getData.length === 0 ? <EmptyCart/> : 
                <div className="row">
                    <div className='col-md-8'>
                        <h3 className='fw-bold'>Cart</h3>
                        <div className='cart-wrapper'>
                            {getData.map((item) => 
                                <ItemListOnCartPage key={item.id} data={item} itemDecrease={() => itemDecrease(item)}  itemIncrement={() => itemIncrement(item)} removeItem={()=> removeItem(item)} />
                                // <ItemListOnCartPage key={item.id} data={item} performAction={() => cartActionsPerform(item)} />
                                // we can write itemIncrement={() => itemIncrement(item)} removeItem={()=> removeItem(item)} these three in single way 
                            )}
                        </div>
                    </div>
                    <div className='col-md-4 ps-4'>
                        <Checkout data={getData}/>
                    </div>
                </div>
                }
            </div>
        </>
    )
 }

 export default Cart