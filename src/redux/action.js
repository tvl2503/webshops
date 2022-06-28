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