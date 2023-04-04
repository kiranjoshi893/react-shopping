import { json } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import {ADD_ITEMS_TO_CART, ADD_TO_CART, ALL_CATEGORIES, ALL_CATEGORIES_ERROR, ALL_CATEGORIES_WAIT, ALL_PRODUCTS, ALL_PRODUCTS_ERROR, ALL_PRODUCTS_WAIT, CART_ITEM, CHANGE_QTY, DECREASE_QTY, INCREASE_QTY, ITEM_ADD_TO_CART, ITEM_DECREASE, ITEM_INCREASE, ITEM_REMOVE_TO_CART, LOGIN, LOGIN_ERROR, LOGOUT, SIGNUP, SIGNUP_ERROR} from '../constant/ActionType';
console.log(localStorage.getItem('accessToken'), 'saddadasd')
let auth = localStorage.getItem('accessToken')

const toastContentMain = <ToastContainer />
const loginDetails = {
  isLogin:auth ? true : false,
  accessToken:'',
  error:'',
  toast:'',
  // toastContent:toastContentMain
}
const signupDetails = {
  toast:'',
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
  qty: 1,
  error:''
}
const getItems = JSON.parse(localStorage.getItem('CartList'))
console.log(getItems, 'getItems')
const itemList ={
  items: getItems ? getItems : [],
  filterItems: [],
  toast:'',
  qty: 1,
  toastContent:toastContentMain
}
const categoriesData = {
  list: []
}

export const LoginReducer1 = (state = loginDetails, action) => {
  switch (action.type){
    case LOGIN: {
      console.log('LoginReducer1', action.payload)
      let getToken = action.payload.accessToken
      localStorage.setItem('accessToken', JSON.stringify(getToken))
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isLogin: localStorage.getItem('accessToken') ? true : false,
        toast:toast.success('login Successfull!',{position: toast.POSITION.TOP_RIGHT}),
      }
    }
    case LOGIN_ERROR:{
      console.log('LoginReducer12')
      return{
        ...state,
        error:action.payload,
        toast:toast.error(action.payload,{position: toast.POSITION.TOP_RIGHT})
      }
    }
    case LOGOUT : {
      return{
        ...state,
        accessToken:localStorage.clear(),
        isLogin:false,
        toast:toast.error('Logout Successfull!',{position: toast.POSITION.TOP_RIGHT})
      }
    }
    default : 
      return {
        ...state
      }
  }
}

// export const SignupReducer = (state = signupDetails, action) => {
//   switch(action.type){
//     case SIGNUP:{
//       return{
//         ...state,
//         toast:toast.success('Signup Successfull!',{position: toast.POSITION.TOP_RIGHT})
//       }
//     }
//     case SIGNUP_ERROR:{
//       return{
//         ...state,
//         error:action.payload,
//         toast:toast.error('Signup Failed!',{position: toast.POSITION.TOP_RIGHT})
//       }
//     }
//     default:{
//       return{
//         ...state
//       }
//     }
//   }
// }

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
    case CART_ITEM:
      console.log(action.payload, 'allProduct')
      return{
        ...state,
        qty:1
      }
    case ITEM_ADD_TO_CART:{
      const ifIdExist = state.items.find((items) => items.id === action.payload.id)
      localStorage.setItem('CartList', JSON.stringify(state.items))
      let sum = ifIdExist?.qty + action.payload.qty
      console.log(action.payload.qty, 'action.payload.qty')
      if(ifIdExist?.qty >= 10 || sum >= 11){
        ifIdExist ? action.payload.qty : state.items.push({...action.payload, qty:action.payload.qty})
        return{
          ...state,
          toast:toast.error('can not add item more than 10',{position: toast.POSITION.TOP_RIGHT}),
        }
      }
      else{
        ifIdExist ? ifIdExist.qty += action.payload.qty : state.items.push({...action.payload, qty:action.payload.qty})
        return{
          ...state,
          toast:toast.success('Item added to cart',{position: toast.POSITION.TOP_RIGHT}),
        }
      }
      }
      case ITEM_INCREASE:
        console.log(state, 'allProduct112')
        const result1  = action.payload.qty >= 11 ? 11 : action.payload.qty += 1
        localStorage.setItem('CartList', JSON.stringify(state.items))
        return{
          ...state,
          qty:result1,
          error:result1 >= 11 ? 'Quantity can not be more than 10' : '',
          // toast:toast.success('Item added to cart',{position: toast.POSITION.TOP_RIGHT}),
        }
      case ITEM_DECREASE:{
        console.log(action.payload, 'allProduct2')
        const result1  = action.payload.qty <= 0 ? 0 : action.payload.qty -= 1
        action.result
        return{
          ...state,
          qty:result1,
          error:result1 <= 0 ? 'Quantity can not be less than 1' : ''
        }
      }
      case ITEM_REMOVE_TO_CART:{
        const removeItem = state.items.filter((item) => item.id !== action.payload.id)
        localStorage.setItem('CartList', JSON.stringify(removeItem))
        return{
          ...state,
          items:removeItem,
          toast: toast.error('Item removed from cart',{position: toast.POSITION.TOP_RIGHT}),
          // toastContent: <ToastContainer />
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
      console.log(action.payload, 'allProduct')
      return{
        ...state, 
        product:action.payload,
        qty:1
      }
      // case ITEM_INCREASE:
      //   console.log(action.payload, 'allProduct112')
      //   const result1  = action.payload.qty >= 11 ? 11 : action.payload.qty += 1
      //   return{
      //     ...state,
      //     qty:result1,
      //     error:result1 >= 11 ? 'Quantity can not be more than 10' : ''
      //   }
      // case ITEM_DECREASE:{
      //   console.log(action.payload, 'allProduct2')
      //   const result1  = action.payload.qty <= 0 ? 0 : action.payload.qty -= 1
      //   action.result
      //   return{
      //     ...state,
      //     qty:result1,
      //     error:result1 <= 0 ? 'Quantity can not be less than 1' : ''
      //   }
      // }
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

export const getAllCategoriesReducer = (state=categoriesData, action) => {
  switch (action.type){
    case ALL_CATEGORIES:{
      return{
        ...state,
        list:action.payload
      }
    }
    default:{
      return{
        ...state
      }
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