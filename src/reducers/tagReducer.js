export const initialTag = {
    name: '',
}

export const tagReducer = (state, action) =>{
    switch(action.type){
        case 'RESET':
            return initialTag
        case 'UPDATE':
            return {
                ...state,
                [action.data.name]: action.data.value
            }
        default:
            return state
    }
}