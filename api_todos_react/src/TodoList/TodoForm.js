import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             api_url: props.api_url,
             task: "",
        }
    }
    
    render() {
        return (
            <div>
                <h2>Create List</h2>
                <form onSubmit={this.handleSubmit}
                id="todo_form" 
                autoComplete="off">
                    <TextField></TextField>
                </form>
            </div>
        )
    }
}
