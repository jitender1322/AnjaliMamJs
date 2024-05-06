import React, { Component } from "react";

export default class ClassComponentExample5 extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: "true",
    };
  }
  handlebtn = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div>
        {this.state.isVisible ? <h1>hello</h1> : <h1>hiii</h1>}
        <button onClick={this.handlebtn}>click</button>
      </div>
    );
  }
}
