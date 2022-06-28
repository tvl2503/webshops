const initState = {
    product: null
}
const productViewModal = (state = initState, action) => {
    switch (action.type){
        case 'productModal/set': 
            return {
                ...state,
                product: action.payload
            }
        case 'productModal/remove':
            return {
                ...state,
                product: null
            }
        default: 
            return state
    }
}
export default productViewModal