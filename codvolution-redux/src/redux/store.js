<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './rootReducer';
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
=======
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './rootReducer';
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
