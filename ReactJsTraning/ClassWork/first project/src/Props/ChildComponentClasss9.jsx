import React, { Component } from "react";

export default class ChildComponentClasss9 extends Component {
  render() {
    const { myFun, subject } = this.props;
    return (
      <div>
        <button onClick={myFun}>Click Child</button>
        <h3>{subject}</h3>
      </div>
    );
  }
}
