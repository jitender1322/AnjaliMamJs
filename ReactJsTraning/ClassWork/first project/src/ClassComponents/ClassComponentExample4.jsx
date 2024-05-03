import React, { Component } from "react";

export default class ClassComponentExample4 extends Component {
  constructor() {
    super();
    this.state = {
      color: "false",
    };
  }
  btnHandler = () => {
    this.setState({ color: !this.state.color });
  };
  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: this.state.color ? "red" : "blue" }}>
          hello
        </h1>
        <button onClick={this.btnHandler}>click</button>
      </div>
    );
  }
}
