import React, { Component } from 'react'

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
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
        // this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.state.temperature;
        // const temperature = this.props.temperature;
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
