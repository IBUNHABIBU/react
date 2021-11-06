<<<<<<< HEAD
import * as actions from './actionTypes';
// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes"

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
        description
    }
    }
}

export function bugRemoved(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
        id
    }
    }
}

export const bugResolved = (id) => (
    {
        type: actions.BUG_RESOLVED,
        payload: {
            id
        }
    }
=======
import * as actions from './actionTypes';
// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes"

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
        description
    }
    }
}

export function bugRemoved(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
        id
    }
    }
}

export const bugResolved = (id) => (
    {
        type: actions.BUG_RESOLVED,
        payload: {
            id
        }
    }
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
)