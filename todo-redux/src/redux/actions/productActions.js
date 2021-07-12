import { ActionTypes }  from '../constants/actionTypes';

export const setProducts = products => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectProduct = (product) => {
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: product
    }
}