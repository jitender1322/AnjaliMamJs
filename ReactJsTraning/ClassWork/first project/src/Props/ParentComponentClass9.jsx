import React, { Component } from "react";
import ChildComponentClasss9 from "./ChildComponentClasss9";

export default class ParentComponentClass9 extends Component {
  handel = () => {
    alert("Clicked By User");
  };
  render() {
    return (
      <div>
        <button onClick={this.handel}>click here</button>
        <ChildComponentClasss9 myFun={this.handel} subject="react" />
      </div>
    );
  }
}
