
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
    this.unMountCounter = () => this.setState({ mount: false })
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
       
     <br />
     <br />
     <div>
        <button onClick= { this.mountCounter } disabled = { this.state.mount } className="btn">Mount Counter</button>
        <button onClick= { this.unMountCounter } disabled = { !this.state.mount } className="btn">Unmount Counter</button>
      </div>
      { this.state.mount ? <Counter/> : null }
    </div>
    );
  }
}

export default App;