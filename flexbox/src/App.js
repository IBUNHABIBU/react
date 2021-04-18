
import './App.css';
import Buttons from './components/Buttons'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="calc-wrapper">
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
          </div>
      </div>
    )
  }
}
