<<<<<<< HEAD
import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
    numberOfIceCream: 25
}

const iceCreamReducer = (state= initialState, action) => {
  switch (action.type) {
      case BUY_ICECREAM:
        return {
            ...state, numberOfIceCream: state.numberOfIceCream- 1
        }
      default:
        return state;
  }
}

=======
import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
    numberOfIceCream: 25
}

const iceCreamReducer = (state= initialState, action) => {
  switch (action.type) {
      case BUY_ICECREAM:
        return {
            ...state, numberOfIceCream: state.numberOfIceCream- 1
        }
      default:
        return state;
  }
}

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default iceCreamReducer;