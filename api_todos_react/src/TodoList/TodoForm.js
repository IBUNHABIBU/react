import React, { Component } from 'react';
import { TextField, Button, Grid, TextareaAutosize  } from '@material-ui/core';

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
        let defaultTask = "";
        let defaultBody = "";
        this.state = {
             api_url: props.api_url,
             task: defaultTask,
             body: defaultBody,
             defaultTaskValue: defaultTask,
             defaultBodyValue: defaultBody,
        }
        this.handleTaskChange=this.handleTaskChange.bind(this)
        this.handleBodyChange=this.handleBodyChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    async formSubmit(formData) {
        var data = new FormData(formData)
        await fetch(this.state.api_url, {
            method: "POST",
            mode: "cors",
            body: data
        }).then(response => response.json())
        .then(response => this.props.updateToDoList(response))
        this.setState({
            task: this.state.defaultTaskValue,
            body: this.state.defaultBodyValue,
        })
    }

    handleTaskChange(e){
        this.setState({
            task: e.target.value
        })
    }

    handleBodyChange(e){
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.formSubmit(e.target)
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={10}>
                    <form onSubmit={this.handleSubmit}
                        id="todo_form"
                        autoComplete="off">
                         <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                id="task-input"
                                label="Task Name"
                                type="text"
                                variant ="outlined"
                                name="todo[task]"
                                fullWidth
                                value={this.state.task}
                                onChange={this.handleTaskChange} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    id="body_input"
                                    label="Task body"
                                    variant = "outlined"
                                    type="text"
                                    name="todo[body]"
                                    rowsMin={3}
                                    placeholder="describe your todo"  
                                    value={this.state.body}
                                    onChange = { this.handleBodyChange }
                                    style={{ width: '100%'}}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                 variant="contained"
                                 color="primary"
                                 type='submit'
                                 style={{ height: "100%", width: '100%' }} 
                                >
                                Add Task
                                </Button>
                            </Grid>
                         </Grid>
                    </form>
                </Grid>
            </Grid>
        )
    }
}
