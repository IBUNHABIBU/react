import * as actions from './actionTypes';

function bugAdded(description) {
    return {
        type: BUG_ADDED,
        payload: {
        description: "Bug1"
    }
    }
}