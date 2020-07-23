import React, { useReducer, useState } from 'react'
import Todo from './Todo'
import { todoListReducer, initialTodoList } from '../reducers/todoListReducer';
import { initialTodo, todoReducer} from '../reducers/todoReducer'
import ActionButtons from './ActionButtons';
import { useStyles } from '../utilities/useStyles';
import { Grid } from '@material-ui/core';
import ToDoModal from './ToDoModal';

const TodoList = (props) => {
    const [todos, dispatchTodos] = useReducer(todoListReducer, initialTodoList)
    
    const [addOpen, setAddOpen] = useState(false)
    const classes = useStyles()
    return (
        <Grid
            container 
            className={classes.todoContainer}
        >
            {todos.map(todo =>{
                return <Todo data={todo} onClick={e => {
                    dispatchTodos({type: 'COMPLETE-TODO', id:todo.id})
                }}/>
            })}
            <ActionButtons 
                add={
                    () => setAddOpen(true)
                } 
                clear={
                    () => dispatchTodos({type: 'CLEAR-TODO'})
                }
            />
            <ToDoModal 
                isOpen={addOpen} 
                close={
                    () => setAddOpen(false)
                } 
                add={
                    (newTask) => dispatchTodos({type: 'ADD-TODO', newTask: newTask})
                }
            />
        </Grid>
    )
}

export default TodoList