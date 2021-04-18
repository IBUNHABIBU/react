
import './App.css';
import Buttons from './components/Buttons'
import React, { Component } from 'react';
import Input from './components/Input'
import ClearButton from './components/ClearButton';
import * as math from 'mathjs'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input: ''
    }
  }
  
  addToInput = (val) => {
    this.setState({ input: this.state.input + val })
  }

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input)})
  }

   render() {
    return (
      <div className="app">
          <div className="calc-wrapper">
            <Input input = { this.state.input } />
            <div className="row">
                <Buttons handleClick = { this.addToInput }>7</Buttons>
                <Buttons handleClick = { this.addToInput }>8</Buttons>
                <Buttons handleClick = { this.addToInput }>9</Buttons>
                <Buttons handleClick = { this.addToInput }>/</Buttons>
            </div>
            <div className="row">
                <Buttons handleClick = { this.addToInput }>4</Buttons>
                <Buttons handleClick = { this.addToInput }>5</Buttons>
                <Buttons handleClick = { this.addToInput }>6</Buttons>
                <Buttons handleClick = { this.addToInput }>*</Buttons>
            </div>
            <div className="row">
                <Buttons handleClick = { this.addToInput }>1</Buttons>
                <Buttons handleClick = { this.addToInput }>2</Buttons>
                <Buttons handleClick = { this.addToInput }>3</Buttons>
                <Buttons handleClick = { this.addToInput }>+</Buttons>
            </div>
            <div className="row">
                <Buttons handleClick = { this.addToInput }>.</Buttons>
                <Buttons handleClick = { this.addToInput }>0</Buttons>
                <Buttons handleClick = { this.handleEqual }>=</Buttons>
                <Buttons handleClick = { this.addToInput }>-</Buttons>
            </div>
            <div className="row">
              <ClearButton children = "clear" handleClear = { () =>  this.setState({ input: "" })} />
            </div>
          </div>
      </div>
    )
  }
}
