import store from './store';
import { BUG_ADDED, BUG_REMOVED } from './actionTypes';
store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "Bug1"
    }
})

store.dispatch({
    type: BUG_REMOVED,
    payload: {
        id: 1
    }
})
console.log(store.getState())