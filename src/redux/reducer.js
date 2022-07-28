import { combineReducers } from 'redux';


import productViewModalSlice from '../components/ProductViewModal/productModalSlice';

import authSlice from '../service/auth/authSlice';
const rootReducer = combineReducers({
    productModal : productViewModalSlice,
    auth: authSlice
})

export default rootReducer;
