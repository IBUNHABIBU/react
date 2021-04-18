
import './App.css';
import Buttons from './components/Buttons'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="calc-wrapper">
            <div className="row">
                <Buttons>1</Buttons>
                <Buttons>2</Buttons>
                <Buttons>3</Buttons>
                <Buttons>+</Buttons>
                <Buttons children = "1" />
            </div>
          </div>
      </div>
    )
  }
}
