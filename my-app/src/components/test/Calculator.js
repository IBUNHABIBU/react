import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.handleChange = this.handleChange.bind(this)
        this.state = {
             temperature: ""
        }
    }
    handleChange = (e) => {
        this.setState({temperature: e.target.value })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
