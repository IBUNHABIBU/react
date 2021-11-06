<<<<<<< HEAD
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
});

=======
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
});

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default reducers;