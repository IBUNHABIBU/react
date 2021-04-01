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
    componentDidMount(){
        console.log("Component did mount")
        console.log("******************************************")
    }
    render() {
        console.log("render")
        return (
            <div>
        <div className="counter">
          <h1>Counter: {this.state.counter} </h1>
        </div>
        <div>
        <button className="btn" onClick = { this.increment }> Increment </button>
        <button className="btn" onClick = { this.decrement }> Decrement </button>
        </div>
            </div>
        )
    }
    componentDidUpdate(){
        console.log("component Did Update")
        console.log("--------------------------------------")
    }
    componentWillUnmount(){
        console.log("component will unmound")
        console.log("########################################")
    }
    shouldComponentUpdate(nextProps, nextState){
        
    }
}

