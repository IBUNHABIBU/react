import React, { Component } from 'react'
import Registration from './auth/Registration';
import Login from './auth/Login';

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
    
        }
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }
    
    handleSuccessfulAuth(data) {
        this.props.handleLogin(data)
        this.props.history.push('/dashboard')
    }
    handleLogoutClick() {
        this.props.handleLogout();
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>Status : { this.props.loggedInStatus }</h2>
                <button >Logout</button>
                <Registration handleSuccessfulAuth = {this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth = {this.handleSuccessfulAuth} />
            </div>
        )
    }
}

