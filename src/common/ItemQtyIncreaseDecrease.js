import {React} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { ItemAddToCart, ItemDecrease, ItemIncrease } from '../action/Action'
import { MinusIcon, PlusIcon, BagIcon } from './Svg'

const ItemQtyIncreaseDecrease = (props) =>{
    const prdQty = useSelector((state) => state.ItemAddTOCart)
    console.log(prdQty, 'prdQty')
    const dispatch  = useDispatch()
    const addItemToCart = (data) => dispatch(ItemAddToCart(data))
    const itemIncrement = (data) => dispatch(ItemIncrease(data))
    const itemDecrease = (data) => dispatch(ItemDecrease(data))
    const location = useLocation()
    const {state} = location
    return(
        <>
            <div className="d-flex">
                <div className="tt-input-counter style-01 me-3">
                    <span className='cursor-pointer' onClick={() => itemDecrease(state)}><MinusIcon /></span>
                    <input readOnly type="text" value={prdQty.qty} onChange={(e) => onChangeHandler(e.target.value)} size="5" />
                    <span className='cursor-pointer' onClick={() => itemIncrement(state)}><PlusIcon /></span>
                </div>
                <button disabled={prdQty.qty == 0 || prdQty.qty == 11} className="btn btn-main py-3 px-3" onClick={() => addItemToCart(state)}>
                    <BagIcon/> Add To Cart
                </button>
            </div>
            {prdQty.error ? <p className='small text-danger mb-0 pt-1'>{prdQty.error}</p> : ''}
        </>
    )
}

export default ItemQtyIncreaseDecrease