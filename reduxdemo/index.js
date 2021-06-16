const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCace = () => {
    return {
        type: BUY_CAKE,
        info: "My customer bought cake"
    }
}

const buyIcecream = () => {
    return {
        type: BUY_ICECREAM,
        info: "Achikilimu"
    }
}

const initialState = {
    numberOfCakes: 10,
    numberOfIcecream: 20
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
          return {
              ...state, numberOfCakes: state.numberOfCakes - 1
          }
        case BUY_ICECREAM: 
          return {
              ...state, numberOfIcecream: state.numberOfIcecream - 1
          }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log("InitialState", store.getState());
const unsubscribe = store.subscribe(() => console.log("update state", store.getState()))
store.dispatch(buyIcecream())
store.dispatch(buyCace())
store.dispatch(buyCace())
store.dispatch(buyIcecream())
unsubscribe();
