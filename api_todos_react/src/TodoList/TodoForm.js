import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             api_url: props.api_url,
             task: "",
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.formSubmit(e.target)
    }
    async formSubmit(formData) {
        var data = new FormData(formData)
        await fetch(this.state.api_url, {
            method: "POST",
            mode: "cors",
            body: data
        }).then(response => response.json())
        .then(response => this.props.updateToDoList(response))
    }
    handleChange(e){
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h2>Create List</h2>
                <form onSubmit={this.handleSubmit}
                id="todo_form" 
                autoComplete="off">
                    <TextField 
                    id="task-input" 
                    label="Task Name"
                    type="text" 
                    variant ="outlined" 
                    name="todo[task]"
                    onChange={this.handleChange}/>
                    <Button
                     variant="contained"
                     color="primary"
                    > Add Task
                    </Button>
                </form>
            </div>
        )
    }
}
