import  actionTypes  from '../constants/actionTypes'
const initialState = {
    product: [{
        id: 1,
        title: "Hood",
        category: "Grafitti"
    }],
}
const productReducer = (state = initialState, { type, payload } ) => {
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return state ;
        // case actionTypes.SELECTED_PRODUCTS:
        //     return state;
        default:
            return state;
    }
}

export default productReducer;