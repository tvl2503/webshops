const initState = {
    user: null
}
const productViewModal = (state = initState, action) => {
    switch (action.type){
        case 'user/set': 
            return {
                ...state,
                user: action.payload
            }
        case 'user/remove':
            return {
                ...state,
                user: null
            }
        default: 
            return state
    }
}
export default productViewModal