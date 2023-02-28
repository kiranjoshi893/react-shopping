import {ADD_ITEMS_TO_CART, ADD_TO_CART, ALL_PRODUCTS, ALL_PRODUCTS_ERROR, ALL_PRODUCTS_WAIT, CART_ITEM, CHANGE_QTY, DECREASE_QTY, INCREASE_QTY, ITEM_ADD_TO_CART, ITEM_REMOVE_TO_CART, LOGIN} from '../constant/ActionType';
console.log(localStorage.getItem('accessToken'), 'saddadasd')
let auth = localStorage.getItem('accessToken')
const loginDetails = {
  isLogin:auth ? true : false,
  accessToken:'',
}
const allProduct = {
  productList : [],
  productList1 : [],
  productError: '',
  productListWait: false,
  cartItem: '',
  qty:10
}
const productQty = {
  productWithID:'',
  product:[],
  cartQTY: 1,
  inputQty: ''
}
const cartList = JSON.parse(localStorage.getItem('cartList'))
const itemList ={
  items: cartList ? cartList : [],
  filterItems: []
}
export const LoginReducer = (state = loginDetails, action) => {
  console.log(action, 'LoginReducer')
  // localStorage.setItem("accessToken", JSON.stringify(action.payload.stsTokenManager.accessToken)),
  switch (action.type){
    case LOGIN: 
    let getToken = action.payload.stsTokenManager.accessToken
    localStorage.setItem('accessToken', JSON.stringify(getToken))
    return {
      ...state,
      accessToken: action.payload.stsTokenManager.accessToken,
      isLogin: localStorage.getItem('accessToken') ? true : false
    }
    default : 
      return {
        ...state
      }
  }
}
export const AllProductReducer = (state = allProduct, action) => {
  switch (action.type){
    case ALL_PRODUCTS:
    return {
      ...state,
      // productList:action.payload,
      productList: action.payload?.map(el => ({
        ...el,
        qty: 1,
    }))
    }
    case ALL_PRODUCTS_ERROR:
      return{
        ...state,
        productError:action.payload
      }
    case ALL_PRODUCTS_WAIT:
      return {
        ...state,
        productListWait : action.payload
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export const ItemsAddToCart = (state = itemList, action) => {
  switch(action.type){
    case ITEM_ADD_TO_CART:{
        const itemInCart = state.items.find((item) => item.id === action.payload.id);
        itemInCart ? itemInCart.qty ++ : state.items.push({...action.payload, qty: 1})
        localStorage.setItem('cartList', JSON.stringify(state.items))
        return{
          ...state
        }
      }
      case ITEM_REMOVE_TO_CART:{
        let result = state.items.filter(item => item.id !== action.payload.id)
        localStorage.setItem('cartList', JSON.stringify(result))
        return{
          ...state,
          items:result
        }
      }
      default:{
        return{
          ...state,
        }
      }
  }
}




export const AddItemToCartReducer = (state = productQty, action) => {
  switch (action.type){
    case CART_ITEM:
      console.log(allProduct , 'action::::::::')
      return{
        ...state,
        productWithID:action.payload,   
        product:state.productList     
      }
    case INCREASE_QTY:
      return{
        ...state,
        cartQTY:state.cartQTY >= 10 ? 10 : state.cartQTY + 1
      }
      case DECREASE_QTY:
      return{
        ...state,
        cartQTY:state.cartQTY <= 1 ? 10 : state.cartQTY - 1
      }
      case CHANGE_QTY:
      return{
        ...state,
        inputQty:action.payload
      }
      case ADD_TO_CART:
      return{
        ...state,
        product:allProduct.productList,
        cartQTY:state.cartQTY,
      }
      default:
        return{
          ...state
        }
  }
}


// export const ListReducer = (state = toggleData, action) => {
//   switch (action.type) {
//     case TOGGLELIST:
//       console.log(localStorage.getItem('removeList'), 'test:::::::');
//       return {
//         ...state,
//         toggleData: !localStorage.getItem('removeList')
//           ? action.payload
//           : JSON.parse(localStorage.getItem('removeList')),
//       };
//     case REMOVELIST:
//       let remaningItems = state.toggleData.filter((key) => {
//         return !action.payload.id.includes(key.id);
//       });
//       localStorage.setItem('removeList', JSON.stringify(remaningItems));
//       if (!localStorage.getItem('removeList')) {
//         return {
//           ...state,
//           toggleData: JSON.parse(localStorage.getItem('removeList')),
//         };
//       }
//       return {
//         ...state,
//         toggleData: remaningItems,
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// };