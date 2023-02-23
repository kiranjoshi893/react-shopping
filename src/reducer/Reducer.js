import {ADD_ITEMS_TO_CART, ALL_PRODUCTS, ALL_PRODUCTS_ERROR, ALL_PRODUCTS_WAIT, LOGIN} from '../constant/ActionType';
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
  cartItem: ''
}
const cartItems = {
  cartList : []
}
const tttt = ''
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
        qty: 10
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
export const AddItemToCartReducer = (state = cartItems, action) =>{
  switch (action.type){
    case ADD_ITEMS_TO_CART:
      return{
        ...state,
        cartList: action.payload
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