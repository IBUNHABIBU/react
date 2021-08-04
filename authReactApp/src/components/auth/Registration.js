import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: "",
             password_confirmation: "",
             registrationErrors: ""
        }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }
    render() {
        return (
            <div>
                <h1>This is registration</h1>
                <form onSubmit = {this.handleSubmit} action=""></form>
            </div>
        )
    }
}
