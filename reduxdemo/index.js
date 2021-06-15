const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

const buyCace = () => {
    return {
        type: BUY_CAKE,
        info: "My customer bought cake"
    }
}

const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
          return {
              ...state, numberOfCakes: state.numberOfCakes - 1
          }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log("InitialState", store.getState())