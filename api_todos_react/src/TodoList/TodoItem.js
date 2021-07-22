import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { makeStyles, Typography } from '@material-ui/core';
import  DeleteIcon  from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    root: {
        height: 'auto',
        padding: '2em',
    }, 
    paper: {
        height: '1em',
        padding: '2em',
        textAlign: 'justify',
    }
})

const TodoItem = (props) => {
    const classes = useStyle();
    const handleDelete = () => {
        props.deleteItem(props.item)
    }
    return (
        <Grid container spacing={0}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Paper elevation={1} className={classes.paper}>
                    <Typography
                        variant ="h4"
                        className = { classes.heading }
                    >
                        {props.item.task}
                    </Typography>
                    <hr />
                    {props.item.body}
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
