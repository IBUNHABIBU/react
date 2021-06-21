import store from './store';
import { bugAdded } from './actions';
store.dispatch(bugAdded("Bug 1"))

 store.dispatch({
     type: "bugRemoved",
     payload: {
         id: 1
     }
 })
console.log(store.getState())