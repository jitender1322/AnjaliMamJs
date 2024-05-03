import React, { Component } from "react";
import ClassComponentExample1 from "./ClassComponentExample1";
import ClassComponentExample2 from "./ClassComponentExample2";
import ClassComponentExample3 from "./ClassComponentExample3";
import ClassComponentExample4 from "./ClassComponentExample4";

export default class AllClassComponent extends Component {
  render() {
    return (
      <div>
        {/* <ClassComponentExample1 /> */}
        {/* <ClassComponentExample2 /> */}
        {/* <ClassComponentExample3 /> */}
        <ClassComponentExample4 />
      </div>
    );
  }
}
