import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        console.log("constructor")
        super(props)
    
        this.state = {
             counter: 0
        }
        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter -1 })
    }
    
    render() {
        console.log("render")
        return (
            <div>
        <div className="counter">
            Counter: {this.state.counter}
        </div>
        <button className="btn" onClick = { this.increment }> Increment </button>
        <button className="btn" onClick = { this.decrement }> Decrement </button>
            </div>
        )
    }
}

