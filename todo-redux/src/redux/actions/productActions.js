<<<<<<< HEAD
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
=======
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
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
}