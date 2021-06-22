import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer";

const rootReducer = combineReducers({
    cake: iceCreamReducer,
    iceCream: cakeReducer
})

export default rootReducer;