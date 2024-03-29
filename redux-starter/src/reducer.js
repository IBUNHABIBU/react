<<<<<<< HEAD
// creating a reducer
// import { BUG_ADDED, BUG_REMOVED} from './actionTypes';
import * as actions from './actionTypes';
let lastId = 0
export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state, {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {
                ...bug, resolved: true
            })
        default:
            return state;
    }
=======
// creating a reducer
// import { BUG_ADDED, BUG_REMOVED} from './actionTypes';
import * as actions from './actionTypes';
let lastId = 0
export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state, {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {
                ...bug, resolved: true
            })
        default:
            return state;
    }
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
}