import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AddItemToCartReducer, AddToCartItemReducer, AllProductReducer, getAllCategoriesReducer, ItemsAddToCart, LoginReducer, LoginReducer1, LogoutReducer} from '../reducer/Reducer';

const rootReducer = combineReducers({
  // LoginStore: LoginReducer,
  LoginStore: LoginReducer1,
  AllProductStore: AllProductReducer,
  AddToCart : AddItemToCartReducer,
  ItemAddTOCart : ItemsAddToCart,
  getAllCategories: getAllCategoriesReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
