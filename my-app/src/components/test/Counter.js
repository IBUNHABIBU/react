import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }
    
    render() {
        return (
            <div>
        <div className="counter">
            Counter: {this.state.counter}
        </div>
            </div>
        )
    }
}

