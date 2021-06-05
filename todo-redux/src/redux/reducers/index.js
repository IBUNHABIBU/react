import productReducer from './productReducer'
import loggedReducer from './isLoggIn';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    allProducts: productReducer,
    isLogged: loggedReducer,
})

export default reducers;