import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AddItemToCartReducer, AddToCartItemReducer, AllProductReducer, ItemsAddToCart, LoginReducer} from '../reducer/Reducer';

const rootReducer = combineReducers({
  LoginStore: LoginReducer,
  AllProductStore: AllProductReducer,
  AddToCart : AddItemToCartReducer,
  ItemAddTOCart : ItemsAddToCart
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
