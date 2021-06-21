import * as actions from './actionTypes';

export function bugAdded(description) {
    return {
        type: "bugAdded",
        payload: {
        description: "Bug1 string"
    }
    }
}