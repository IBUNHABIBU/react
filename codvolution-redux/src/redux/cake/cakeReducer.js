<<<<<<< HEAD
import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numberOfCakes: 10,
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, 
                numberOfCakes: state.numberOfCakes-action.payload
            }
        default:
            return state;
    }
    
}

=======
import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numberOfCakes: 10,
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, 
                numberOfCakes: state.numberOfCakes-action.payload
            }
        default:
            return state;
    }
    
}

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default cakeReducer;