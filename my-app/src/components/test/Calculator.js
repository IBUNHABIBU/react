import React, { Component } from 'react'

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
export default class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
      }
    
      handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
      }
    render() {
        const temperature = this.state.temperature;
        // const temperature = this.props.temperature;
        const scale = this.state.scale;
        return (
            <fieldset>
                {/* <legend>Enter temperature in Celcious </legend>
                <input value= {temperature}
                onChange = {this.handleChange } */}
                {/* /> */}
                {/* <BoilingVerdict celcious = {parseFloat(temperature)} /> */}
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </fieldset>
        )
    }
}
