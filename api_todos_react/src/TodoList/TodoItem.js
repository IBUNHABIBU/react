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
        height: 'auto',
        padding: '2em',
        textAlign: 'justify',
    }, 
    heading: {
        textAlign: 'center',
    }, 
    todo_body: {
        padding: '1em',
    }, 
    divider: {
        width: '25%',
        margin: '1em'
    }
})

const TodoItem = (props) => {
    const classes = useStyle();
    const handleDelete = () => {
        props.deleteItem(props.item)
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Paper elevation={10} className={classes.paper}>
                    <Typography
                        variant ="h4"
                        className = { classes.heading }
                    >
                        {props.item.task}
                    </Typography>
                    <hr className={classes.divider} 
                    style={{ marginLeft: '37.5%'}} />
                    <div className={classes.todo_body}>
                        <Typography variant="body1">
                            {props.item.body}
                        </Typography>
                    </div>
                    <hr className={classes.divider} />
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
