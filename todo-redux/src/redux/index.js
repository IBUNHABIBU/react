import counterReducer from './counter'
import loggedReducer from './isLoggIn';
import { combinedReducers } from 'redux';

const allReducers = combinedReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
})