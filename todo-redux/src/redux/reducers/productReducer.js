const initialState = {
    product: [{
        id: 1,
        title: "Hood",
        category: "Grafitti"
    }],
}
const productReducer = (state = 0, { type, payload } ) => {
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return ;
        case actionTypes.SELECTED_PRODUCTS:
            return ;
        default:
            return state;
    }
}

export default productReducer;