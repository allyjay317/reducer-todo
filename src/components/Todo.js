import React from 'react'
import { Card, CardContent, Typography, Grid, Chip } from '@material-ui/core'
import { useStyles } from '../utilities/useStyles'
import Moment from 'react-moment'

const Todo = (props) => {
    const classes = useStyles()
    return (
        <Grid item className={classes.todo}>
            <Card onClick={props.onClick} >
                <CardContent >
                    <Typography className={props.data.completed ? classes.cardTitleCompleted : classes.cardTitle}>
                        {props.data.item}
                    </Typography>
                    <Grid container>
                        {props.data.tags.map(tag =>
                            <Chip
                                label={tag.name} />
                        )}
                    </Grid>
                    <Typography className={classes.cardSubtitle} color='textSecondary'>
                        Created on
                        <Moment element='div' format='D MMM YYYY - hh:mma'>
                            {props.data.id}
                        </Moment>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Todo