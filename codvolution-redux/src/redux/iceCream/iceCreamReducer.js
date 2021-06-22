import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
    numberOfIceCream = 25
}

const iceCreamReducer = (state, action) => {
  switch (action.type) {
      case BUY_ICECREAM:
        return {
            ...state, numberOfIceCream: state.numberOfIceCream- 1
        }
      default:
        return state;
  }
}

export default iceCreamReducer;