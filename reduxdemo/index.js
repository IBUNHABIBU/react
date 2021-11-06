const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()

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

const cakesInitialState = {
    numberOfCakes: 10,
}

const IcecreamInitialState = {
    numberOfIcecream: 20
}

const cakeReducer = (state = cakesInitialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
          return {
              ...state, numberOfCakes: state.numberOfCakes - 1
          }
        default:
            return state;
    }
}

const IcecreamReducer = (state = IcecreamInitialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
          return {
              ...state, numberOfIcecream: state.numberOfIcecream - 1
          }
        default:
          return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: IcecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("InitialState", store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyIcecream())
store.dispatch(buyCace())
store.dispatch(buyCace())
store.dispatch(buyIcecream())
unsubscribe();
