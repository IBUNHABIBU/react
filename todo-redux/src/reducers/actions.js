import { ADD_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = ( content ) => ({
    type: ADD_TODO,
    payload: {
    id: ++nextTodoId,
    content,
    }
})

export const increment = (nr) => {
    return {
        type: "INCREMENT",
        payload: nr
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}