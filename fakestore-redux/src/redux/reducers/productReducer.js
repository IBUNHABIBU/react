<<<<<<< HEAD
import { selectedProduct } from "../actions/productActions";
import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) =>{
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state , products: payload }
        default: 
         return state
    }

};

export const selectedProductReducer = ( state = {}, {type, payload}) => {
    switch(type) {
        case actionTypes.SELECTED_PRODUCTS:
            return {
                ...state, ...payload
            }
        case actionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}
        default:
            return state;
    }
=======
import { selectedProduct } from "../actions/productActions";
import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) =>{
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state , products: payload }
        default: 
         return state
    }

};

export const selectedProductReducer = ( state = {}, {type, payload}) => {
    switch(type) {
        case actionTypes.SELECTED_PRODUCTS:
            return {
                ...state, ...payload
            }
        case actionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}
        default:
            return state;
    }
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
}