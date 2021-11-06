<<<<<<< HEAD
import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer";

const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer
})

=======
import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer";

const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer
})

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default rootReducer;