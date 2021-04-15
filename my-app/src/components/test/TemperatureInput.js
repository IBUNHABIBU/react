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
   
}
