import React, { Component } from 'react'
const scaleNames = {
    c: 'Celcious',
    f: 'Fahreinheit'
}
export default class TemperatureInput extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            temperature: ''
       }
   }
   handleChange(e) {
       this.setState(
           { temperature: e.target.value }
       )
   }
   render() {
       const temperature = this.state.temperature
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
