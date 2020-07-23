import React from 'react'
import { Grid, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import { useStyles } from '../utilities/useStyles'

const ActionButtons = (props) => {
    const classes = useStyles()
    return (
        <Grid
            container
            direction='row' 
            justify='flex-end'
            alignItems='center'
            spacing={3}
            className={classes.ActionButtons}
        >
            <Grid item>
                <Fab color='primary' aria-label='add'  onClick={props.add}>
                    <AddIcon />
                </Fab>
            </Grid>
            <Grid item>
                <Fab color='primary' aria-label='clear' onClick={props.clear}>
                    <ClearAllIcon />
                </Fab>
            </Grid>
        </Grid>
    )
}

export default ActionButtons