
import './App.css';

import React, { Component } from "react";
import Board from "./components/Board";

import Counter from "./components/test/Counter";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mount: true,
       ignoreProp: 0
    }
    this.mountCounter = () => this.setState({ mount: true })
    this.unMountCounter = () => this.setState({ mount: false })
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random()})
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
     <br />
      <button onClick = {this.ignoreProp } className="btn"> Ignore Prop</button>
      </div>
      { this.state.mount ? <Counter ignoreProp = { this.state.ignoreProp }/> : null }
    </div>
    );
  }
}

export default App;