import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import  DeleteIcon  from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    root: {
        height: '3em',
        padding: '2em',
    }
})

const TodoItem = (props) => {
    const classes = useStyle();
    const handleDelete = () => {
        
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={9}>
                <Paper elevation={1} className={classes.root}>
                    {props.item.task}
                    <hr />
                    <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={ <DeleteIcon /> }
                    onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TodoItem
