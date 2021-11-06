<<<<<<< HEAD
import store from './store';
import { bugAdded, bugRemoved } from './actions';

const unsubscribe = store.subscribe(() => console.log("Store changed",store.getState()))
store.dispatch(bugAdded("Bug 1"))

unsubscribe() /// we are not gonna notified when calling unsubscribe
 store.dispatch(bugRemoved(1))
=======
import store from './store';
import { bugAdded, bugRemoved } from './actions';

const unsubscribe = store.subscribe(() => console.log("Store changed",store.getState()))
store.dispatch(bugAdded("Bug 1"))

unsubscribe() /// we are not gonna notified when calling unsubscribe
 store.dispatch(bugRemoved(1))
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
console.log(store.getState())