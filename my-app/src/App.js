<<<<<<< HEAD

import './App.css';

import React, { Component } from "react";
import Board from "./components/Board";

import Counter from "./components/test/Counter";
import Calculator from "./components/test/Calculator";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mount: true,
       ignoreProp: 0,
       seed: 0,
       showErrorComponent: false
    }
    this.mountCounter = () => this.setState({ mount: true })
    this.unMountCounter = () => this.setState({ mount: false })
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100 )})
    this.toggleError = () => this.setState( { showErrorComponent: !this.state.showErrorComponent })
  }
  
  render() {
    return (
      <div className="game">
        
        <div className="game-board">
          <Board />
          <br/>
        </div>
        <br />
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
      <button onClick = {this.seedGenerator } className="btn"> Generate Seed </button>
      <button onClick = {this.toggleError } className="btn"> Toggle Error </button>
      </div>
      { this.state.mount ? <Counter ignoreProp = { this.state.ignoreProp }
      showErrorComponent = { this.state.showErrorComponent }
       seed = { this.state.seed } /> : null }
       <Calculator/>
    </div>
    );
  }
}

=======

import './App.css';

import React, { Component } from "react";
import Board from "./components/Board";

import Counter from "./components/test/Counter";
import Calculator from "./components/test/Calculator";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mount: true,
       ignoreProp: 0,
       seed: 0,
       showErrorComponent: false
    }
    this.mountCounter = () => this.setState({ mount: true })
    this.unMountCounter = () => this.setState({ mount: false })
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100 )})
    this.toggleError = () => this.setState( { showErrorComponent: !this.state.showErrorComponent })
  }
  
  render() {
    return (
      <div className="game">
        
        <div className="game-board">
          <Board />
          <br/>
        </div>
        <br />
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
      <button onClick = {this.seedGenerator } className="btn"> Generate Seed </button>
      <button onClick = {this.toggleError } className="btn"> Toggle Error </button>
      </div>
      { this.state.mount ? <Counter ignoreProp = { this.state.ignoreProp }
      showErrorComponent = { this.state.showErrorComponent }
       seed = { this.state.seed } /> : null }
       <Calculator/>
    </div>
    );
  }
}

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default App;