import React, { Component } from "react";
import ChildComponentClass from "./ChildComponentClass8";
import ChildComponentClass8 from "./ChildComponentClass8";

export default class ParentComponentClass8 extends Component {
  render() {
    return (
      <div>
        <ChildComponentClass8 subject="react" marks="44" />
      </div>
    );
  }
}
