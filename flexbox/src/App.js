
import './App.css';
import Buttons from './components/Buttons'
import React, { Component } from 'react';
import Input from './components/Input'
import ClearButton from './components/ClearButton';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input: ''
    }
  }
  
  render() {
    return (
      <div className="app">
          <div className="calc-wrapper">
            <Input input = { this.state.input } />
            <div className="row">
                <Buttons>7</Buttons>
                <Buttons>8</Buttons>
                <Buttons>9</Buttons>
                <Buttons>/</Buttons>
            </div>
            <div className="row">
                <Buttons>4</Buttons>
                <Buttons>5</Buttons>
                <Buttons>6</Buttons>
                <Buttons>*</Buttons>
            </div>
            <div className="row">
                <Buttons>1</Buttons>
                <Buttons>2</Buttons>
                <Buttons>3</Buttons>
                <Buttons>+</Buttons>
            </div>
            <div className="row">
                <Buttons>.</Buttons>
                <Buttons>0</Buttons>
                <Buttons>=</Buttons>
                <Buttons>-</Buttons>
            </div>
            <div className="row">
              <ClearButton children = "clear" handleClear = { () =>  this.setState({ input: "" })} />
            </div>
          </div>
      </div>
    )
  }
}
