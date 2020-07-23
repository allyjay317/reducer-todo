export const initialTodoList = []

export const todoListReducer = (state, action) => {
    switch (action.type) {

        case 'ADD-TODO':
            return [
                ...state,
                { ...action.newTask, id: Date.now() }
            ]
        case 'CLEAR-TODO': {
            return state.filter(item => item.completed === false)
        }
        case 'COMPLETE-TODO': {
            return state.map(item => {
                return item.id === action.id ? { ...item, completed: !item.completed } : item
            })
        }
        default:
            return state
    }
}