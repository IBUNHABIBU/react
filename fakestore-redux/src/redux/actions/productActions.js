<<<<<<< HEAD
import { actionTypes } from "../constants/actionTypes"

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCTS,
    }
=======
import { actionTypes } from "../constants/actionTypes"

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCTS,
    }
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
}