export const initialTodo = {
    item: '',
    completed: false,
    id: -1,
    tags: []
}

export const todoReducer = (state, action) =>{
    debugger
    switch(action.type){
        case 'RESET':
            return initialTodo
        case 'UPDATE':
            return {
                ...state,
                [action.data.name]: action.data.value
            }
        case 'ADD-TAG':
            return {...state, tags: [...state.tags, action.newTag]}
        case 'DELETE-TAG':{
            const filtered = state.tags.filter((item, index) => index !== action.index)
            return {...state, tags: filtered}
        }
        default:
            return state
    }
}