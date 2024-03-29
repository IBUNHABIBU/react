import React, { Component } from 'react'
import axios from 'axios';

export default class Registration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: "",
             password_confirmation: "",
             registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
      this.setState({
          [event.target.name] : event.target.value
      })
    }

    handleSubmit(event) {
        const { email, password, password_confirmation } = this.state;
        axios.post("http://localhost:3001/registrations", {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        }, {
            withCredentials: true 
        }).then( response => {
            if(response.data.status === 'created') {
                this.props.handleSuccessfulAuth(response.data)
            }
        })
        .catch(err => console.log("Registration err", err))
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h3>Fill the form below</h3>
                <form onSubmit = {this.handleSubmit} action="">
                    <input type="email" name="email" id="email" 
                     placeholder="Email" value={this.state.email} 
                     onChange= {this.handleChange} requred />

                     <input type="password" name="password" id="password" 
                     placeholder="Password" value={this.state.password} 
                     onChange= {this.handleChange} requred />

                     <input type="password" name="password_confirmation" id="confirm" 
                     placeholder="confirm password" value={this.state.password_confirmation} 
                     onChange= {this.handleChange} requred />

                     <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
