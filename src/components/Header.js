import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { useStyles } from '../utilities/useStyles'


const Header = () => {
    const classes = useStyles()
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Things I have to do
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header