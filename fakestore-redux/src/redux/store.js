<<<<<<< HEAD
import { createStore } from "redux";
import reducers  from './reducers/index';

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

=======
import { createStore } from "redux";
import reducers  from './reducers/index';

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default store;