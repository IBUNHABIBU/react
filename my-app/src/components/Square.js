import React, { Component } from "react";

class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick = {function() {
            console.log("clicked")
        }}>
          {this.props.value}
        </button>
      );
    }
  }

  export default Square;