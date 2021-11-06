<<<<<<< HEAD
import  { ActionTypes }  from '../constants/actionTypes'
const initialState = {
    product: [{
        id: 1,
        title: "Dipesh",
        category: "programmer"
    }],
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

=======
import  { ActionTypes }  from '../constants/actionTypes'
const initialState = {
    product: [{
        id: 1,
        title: "Dipesh",
        category: "programmer"
    }],
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

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default productReducer;