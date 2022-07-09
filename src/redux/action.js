export const addProductModal  = (data) => {
    return {
        type: 'productModal/set',
        payload: data
    }
}
export const removeProductModal = () => {
    return {
        type: 'productModal/remove'
    }
}
export const loginStart = () => {
    return {
        type: 'user/start'
    }
}
export const setLoginUser = (data) => {
    return {
        type: 'user/success',
        payload: data
    }
}
export const loginFailure = () => {
    return {
        type: 'user/failure'
    }
}
export const LogoutUser = () => { 
    return {
        type: 'user/logout'
    }
}