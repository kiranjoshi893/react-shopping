import {LOGIN, ALL_PRODUCTS, ALL_PRODUCTS_ERROR, ALL_PRODUCTS_WAIT, ADD_ITEMS_TO_CART, INCREASE_QTY, DECREASE_QTY, ADD_TO_CART, CART_ITEM, CHANGE_QTY, ITEM_ADD_TO_CART, ITEM_REMOVE_TO_CART, ITEM_INCREASE, ITEM_DECREASE, ITEM_REMOVE_ALL} from '../constant/ActionType';

export const LoginAction = (params) => {
  // localStorage.setItem("accessToken", JSON.stringify(params.accessToken));
  console.log(params, 'loginAction')
  return {
    type: LOGIN,
    payload: params,
  };
};

export const AllProductList = (params) => {
  return{
    type: ALL_PRODUCTS,
    payload:params
  }
}
export const AllProductError = (params) => {
  return{
    type: ALL_PRODUCTS_ERROR,
    payload:params
  }
}
export const AllProductWait = (params) => {
  return{
    type: ALL_PRODUCTS_WAIT,
    payload:params
  }
} 
export const ItemAddToCart = (params) => {
  return{
    type: ITEM_ADD_TO_CART,
    payload:params
  }
}
export const ItemRemoveToCart = (params) => {
  console.log(params, 'ItemRemoveToCarts')
  return{
    type: ITEM_REMOVE_TO_CART,
    payload:params
  }
}
export const ItemIncrease = (params) => {
  return{
    type:ITEM_INCREASE,
    payload:params
  }
}
export const ItemDecrease = (params) => {
  return{
    type:ITEM_DECREASE,
    payload:params
  }
}
export const RemoveAllItems = (params) => {
  return{
    type:ITEM_REMOVE_ALL,
    payload:params
  }
}





export const IncreaseQty = (params) => {
  return {
    type:INCREASE_QTY,
    payload:params
  }
}
export const DecreaseQty = (params) => {
  return {
    type:DECREASE_QTY,
    payload:params
  }
}
export const AddItemToCart = (params) => {
  return {
    type:ADD_TO_CART,
    payload:params
  }
}
export const CartItem = (params) => {
  return {
    type:CART_ITEM,
    payload:params
  }
}
export const CartQtyChange = (params) => {
  return {
    type:CHANGE_QTY,
    payload:params
  }
}