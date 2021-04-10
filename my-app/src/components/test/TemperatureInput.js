import React, { Component } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

export default class TemperatureInput extends Component {
    constructor(props) {
        super(props)
     this.handleChange = this.handleChange.bind(this);
     this.state = {temperature: ''};
     
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
