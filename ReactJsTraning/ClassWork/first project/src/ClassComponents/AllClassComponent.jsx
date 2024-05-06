import React, { Component } from "react";
import ClassComponentExample1 from "./ClassComponentExample1";
import ClassComponentExample2 from "./ClassComponentExample2";
import ClassComponentExample3 from "./ClassComponentExample3";
import ClassComponentExample4 from "./ClassComponentExample4";
import ClassComponentExample5 from "./ClassComponentExample5";

export default class AllClassComponent extends Component {
  render() {
    return (
      <div>
        {/* <ClassComponentExample1 /> */}
        {/* <ClassComponentExample2 /> */}
        {/* <ClassComponentExample3 /> */}
        {/* <ClassComponentExample4 /> */}
        <ClassComponentExample5 />
      </div>
    );
  }
}
