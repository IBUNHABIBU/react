import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: [{
        id: 1,
        title: "FST",
        category: "Operation"
    }]
}
export const productReducer = (state = initialState, {type, payload}) =>{
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return state
        default: 
         return state
    }

};