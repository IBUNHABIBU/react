import React, { Component } from 'react'

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString();
}

export default class Calculator extends Component {
  constructor(props) {
      super(props)
      this.handleCelciousChange = this.handleCelciousChange.bind(this)
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
      this.state = {
           temperature: '',
           scale: 'c'
      }
  }
  handleChange(e) {
      this.setState({
          temperature: e.target.value 
      })
  }
  render(){
      const temperature = this.state.temperature;
      return(
          <div>
              <TemperatureInput scale = "c" />
              <TemperatureInput scale = "f" />
          </div>
      )
  }
}
