import * as actions from './actionTypes';
// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes"

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
        description: "Bug1 string"
    }
    }
}