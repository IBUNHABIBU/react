<<<<<<< HEAD
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
//   handleChange(e) {
//       this.setState({
//           temperature: e.target.value 
//       })
//   }
  handleCelciousChange(temperature) {
    this.setState({ scale: 'c', temperature })
  }
  handleFahrenheitChange(temperature) {
      this.setState({ scale: 'f', temperature })
  }
  render(){
      const temperature = this.state.temperature;
      const scale = this.state.scale 
      const celcious = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

      return(
          <div>
              <TemperatureInput scale = "c"
                temperature = { celcious }
                onTemperatureChange = { this.handleCelciousChange } />
              <TemperatureInput scale = "f" 
                temperature = { fahrenheit }
                onTemperatureChange = { this.handleFahrenheitChange }
              />
              <BoilingVerdict 
              celcious = { parseFloat(celcious) } />
          </div>
      )
  }
}
=======
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
//   handleChange(e) {
//       this.setState({
//           temperature: e.target.value 
//       })
//   }
  handleCelciousChange(temperature) {
    this.setState({ scale: 'c', temperature })
  }
  handleFahrenheitChange(temperature) {
      this.setState({ scale: 'f', temperature })
  }
  render(){
      const temperature = this.state.temperature;
      const scale = this.state.scale 
      const celcious = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

      return(
          <div>
              <TemperatureInput scale = "c"
                temperature = { celcious }
                onTemperatureChange = { this.handleCelciousChange } />
              <TemperatureInput scale = "f" 
                temperature = { fahrenheit }
                onTemperatureChange = { this.handleFahrenheitChange }
              />
              <BoilingVerdict 
              celcious = { parseFloat(celcious) } />
          </div>
      )
  }
}
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
