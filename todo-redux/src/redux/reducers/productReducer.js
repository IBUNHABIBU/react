import  { ActionTypes }  from '../constants/actionTypes'
const initialState = {
    product: [],
}
const productReducer = (state = initialState, { type, payload } ) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state, products: payload,
            } ;
        // case actionTypes.SELECTED_PRODUCTS:
        //     return state;
        default:
            return state;
    }
}

export default productReducer;