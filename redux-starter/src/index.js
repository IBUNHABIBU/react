import store from './store';
import { bugAdded } from './actions';
store.dispatch(bugAdded("Bug 1"))

// store.dispatch()
console.log(store.getState())