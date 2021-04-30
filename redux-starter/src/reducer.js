// creating a reducer
function reducer(state, action) {
    if(action.type === 'bugAdded') {
        return [
            ...state, 
            { 
                description: action.payload.description,
                resolved: false 
            }
        ]
    }
}