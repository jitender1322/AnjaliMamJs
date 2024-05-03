import React, { Component } from "react";

export default class ClassComponentExample2 extends Component {
  constructor() {
    super(); //we are calling parent class (component) constructor
    this.state = {
      number: 10,
    };
  }
  render() {
    return (
      <div>
        <h1>number : {this.state.number}</h1>
      </div>
    );
  }
}
