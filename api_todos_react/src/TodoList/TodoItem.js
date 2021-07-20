import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const TodoItem = (props) => {
    return (
        <Grid container spacing={3}>
            <Paper>
                {props.item.task}
            </Paper>
        </Grid>
    )
}

export default TodoItem
