import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons';

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
                    <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={ <DeleteIcon /> }
                    onClick
                    >
                        Delete
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TodoItem
