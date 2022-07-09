const initState = {
    currentUser: null, 
    isFetching: false, 
    error: false
}
const login = (state = initState, action) => {
    switch (action.type){
        case 'user/start': 
            return {
                ...state,
                isFetching: true
            }
        case 'user/success': 
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload
            }
        case 'user/failure':
            return {
                ...state,
                error : true,
                isFetching: false,
            }
        case 'user/logout':
            return {
                initState
            }
        default: 
            return state
    }
}
export default login