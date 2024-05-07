import React, { Component } from "react";

export default class ChildComponentClass8 extends Component {
  render() {
    const { subject, marks } = this.props;
    return (
      <div>
        <h3>subject = {subject}</h3>
        <h3>marks = {marks}</h3>
      </div>
    );
  }
}
