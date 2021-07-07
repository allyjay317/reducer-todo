import React, { useState, useEffect } from 'react'
import { Modal, Card, CardContent, TextField, CardActions, Button, Grid, Chip, Input, Fade } from '@material-ui/core'
import { useForm } from '../hooks/useForm'
import { useStyles } from '../utilities/useStyles'
import { initialTodo, todoReducer } from '../reducers/todoReducer'
import { initialTag, tagReducer } from '../reducers/tagReducer'
import TagContainer from './TagContainer'

const ToDoModal = (props) => {
    const [todo, submitTodo, handleTodo, dispatchTodo] = useForm(
        initialTodo,
        () => {
            props.add(todo)
            props.close()
        },
        todoReducer
    )
    const [addTag, setAddTag] = useState(false)
    const [newTag, submitNewTag, handleNewTag] = useForm(
        initialTag,
        () => {
            dispatchTodo({ type: 'ADD-TAG', newTag: newTag })
            setAddTag(false)
        },
        tagReducer
    )
    const [focus, setFocus] = useState()

    const classes = useStyles()

    useEffect(() => {
        debugger
        if (focus !== undefined && focus !== null) {
            focus.focus()
        }
    }, [focus])

    return (
        <Modal
            open={props.isOpen}
            onClose={props.close}
            className={classes.modal}
            border={0}
        >
            <Fade in={props.isOpen}>
                <Card className={classes.todoModal} border={0}>
                    <CardContent>

                        <form onSubmit={submitTodo}>
                            <TextField
                                inputRef={(input) => setFocus(input)}
                                id='standard-size-small'
                                size='small'
                                label='New Task'
                                defaultValue='Enter Task Here'
                                value={todo.item}
                                name='item'
                                onChange={handleTodo}
                            />
                        </form>
                        <Grid container>
                            <TagContainer tags={todo.tags} deleteTag={dispatchTodo} />
                            <Grid item>
                                {addTag ? (
                                    <form onSubmit={submitNewTag}>
                                        <Chip label={
                                            <Input
                                                inputRef={(input) => setFocus(input)}
                                                id='standard-required'
                                                label='New Tag'
                                                defaultValue='Enter new Tag'
                                                value={newTag.name}
                                                name='name'
                                                onChange={handleNewTag} />
                                        } />
                                    </form>) : (
                                        <Chip label='Add new Tag' onClick={() => setAddTag(true)} />
                                    )
                                }
                            </Grid>

                        </Grid>
                        <CardActions>
                            <Button size='small' onClick={submitTodo}>Add New Task</Button>
                        </CardActions>


                    </CardContent>
                </Card>
            </Fade>
        </Modal>
    )
}

export default ToDoModal