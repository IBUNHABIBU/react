<<<<<<< HEAD
import React, { Component } from 'react'
const scaleNames = {
    c: 'Celcious',
    f: 'Fahreinheit'
}
export default class TemperatureInput extends Component {
   constructor(props) {
       super(props)
       this.handleChange = this.handleChange.bind(this)
       this.state = {
            temperature: ''
       }
   }
   handleChange(e) {
    //    this.setState(
    //        { temperature: e.target.value }
    //    )
    this.props.onTemperatureChange(e.target.value)
   }
   render() {
    //    const temperature = this.state.temperature
    const temperature = this.props.temperature;
       const scale = this.props.scale;
       return (
           <div>
               <fieldset>
                   <legend>Enter temperature in { scaleNames[scale]}</legend>
                   <input value= {temperature} onChange = { this.handleChange }/>
               </fieldset>
           </div>
       )
   }
}
=======
import React, { Component } from 'react'
const scaleNames = {
    c: 'Celcious',
    f: 'Fahreinheit'
}
export default class TemperatureInput extends Component {
   constructor(props) {
       super(props)
       this.handleChange = this.handleChange.bind(this)
       this.state = {
            temperature: ''
       }
   }
   handleChange(e) {
    //    this.setState(
    //        { temperature: e.target.value }
    //    )
    this.props.onTemperatureChange(e.target.value)
   }
   render() {
    //    const temperature = this.state.temperature
    const temperature = this.props.temperature;
       const scale = this.props.scale;
       return (
           <div>
               <fieldset>
                   <legend>Enter temperature in { scaleNames[scale]}</legend>
                   <input value= {temperature} onChange = { this.handleChange }/>
               </fieldset>
           </div>
       )
   }
}
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
