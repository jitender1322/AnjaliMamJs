import React from "react";
import StyleComponentExample1 from "./StyleComponentExample1";
import StyleComponentExample2 from "./StyleComponentExample2";
import StyleComponentExample3 from "./StyleComponentExample3";
import MaterialUiExp1 from "./MaterialUiExp1";

export default function AllStyleExample() {
  return (
    <div>
      {/* inline css example */}
      {/* <StyleComponentExample1 /> */}

      {/* internal css example */}
      {/* <StyleComponentExample2 /> */}

      {/* external css */}
      {/* <StyleComponentExample3 /> */}

      <MaterialUiExp1 />
    </div>
  );
}
