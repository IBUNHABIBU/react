import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        console.log("constructor")
        super(props)
    
        this.state = {
             counter: 0
        }
    }
    
    render() {
        console.log("render")
        return (
            <div>
        <div className="counter">
            Counter: {this.state.counter}
        </div>
            </div>
        )
    }
}

