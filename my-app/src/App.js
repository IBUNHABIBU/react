
import './App.css';

import React, { Component } from "react";
import Board from "./components/Board";

import Counter from "./components/test/Counter";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mount: true
    }
    this.mountCounter = () => this.setState({ mount: true })
    this.unmountCounter = () => this.setState({ mount: false })
  }
  
  render() {
    return (
      <div className="game">
        
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
       { this.state.mount ? <Counter/> : null }
     <br />
     <br />
     <div>
        <button onClick= { this.mountCounter } disabled = { this.state.mount } className="btn">Mount Counter</button>
        <button onClick= { this.unmountCounter } disabled = { !this.state.mount } className="btn">Unmount Counter</button>
      </div>
    </div>
    );
  }
}

export default App;