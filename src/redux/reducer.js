import { combineReducers } from 'redux';


import productViewModalSlice from '../components/ProductViewModal/productModalSlice';

import authSlice from '../service/auth/authSlice';
import cartSlice from '../service/cart/cartSlice';
const rootReducer = combineReducers({
    productModal : productViewModalSlice,
    auth: authSlice,
    cart: cartSlice
})

export default rootReducer;
