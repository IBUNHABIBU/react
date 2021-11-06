<<<<<<< HEAD
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onButtonClicked}>Click Me!</button>
       
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      </div>
    );
  }
}

=======
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onButtonClicked}>Click Me!</button>
       
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      </div>
    );
  }
}

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
export default MyComponent;