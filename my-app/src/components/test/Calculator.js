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

}

export default class Calculator extends Component {
  constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
           temperature: ''
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
