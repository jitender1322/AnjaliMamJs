import React, { Component } from "react";

export default class ClassComponentExample3 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 10,
      name: "jitender",
    };
  }
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </div>
    );
  }
}
