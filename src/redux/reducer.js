import { combineReducers } from 'redux';


import productViewModal from "../components/ProductViewModal/productModalSlice";

const rootReducer = combineReducers({
    productModal : productViewModal
})

export default rootReducer;
