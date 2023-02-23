import {LOGIN, ALL_PRODUCTS, ALL_PRODUCTS_ERROR, ALL_PRODUCTS_WAIT, ADD_ITEMS_TO_CART} from '../constant/ActionType';

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
export const AddItemToCart = (params) => {
  return {
    type:ADD_ITEMS_TO_CART,
    payload:params
  }
} 