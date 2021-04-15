import React, { Component } from 'react'

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

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
          <fieldset>
              <legend>Enter temperature in celcious</legend>
              <input value= {temperature} onChange = { this.handleChange } />
              <BoilingVerdict celcious = { parseFloat(temperature)} />
          </fieldset>
      )
  }
}
