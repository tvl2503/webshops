const initState = {
    products: null
}
const CartSlice = (state = initState, action) => {
    switch (action.type){
        case 'cart/addToCart': 
            return {
                ...state,
                product: action.payload
            }
        case 'cart/remove':
            return {
                ...state,
                product: null
            }
        default: 
            return state
    }
}
export default CartSlice