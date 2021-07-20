import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles()

const TodoItem = (props) => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={9}>
                <Paper elevation={1}>
                    {props.item.task}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TodoItem
