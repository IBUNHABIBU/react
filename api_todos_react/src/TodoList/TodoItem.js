import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        height: '3em',
        padding: '2em',
    }
})

const TodoItem = (props) => {
    const classes = useStyle();
    
    return (
        <Grid container spacing={0}>
            <Grid item xs={9}>
                <Paper elevation={1} className={classes.root}>
                    {props.item.task}
                    <hr />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TodoItem
