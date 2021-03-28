
import './App.css';

import React, { Component } from "react";
import Board from "./components/Board";

import Counter from "./components/test/Counter";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
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
        <Counter />
      </div>
    );
  }
}

export default App;