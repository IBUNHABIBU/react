<<<<<<< HEAD
const loggedReducer = (state = false, action) =>  {
    switch(action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}

=======
const loggedReducer = (state = false, action) =>  {
    switch(action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default loggedReducer;