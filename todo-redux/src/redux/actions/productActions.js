import actionTypes  from '../constants/actionTypes';

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectProduct = (product) => {
    return {
        type: actionTypes.SELECT_PRODUCT,
        payload: product
    }
}