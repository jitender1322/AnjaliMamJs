import React from "react";
import AllJsxExample from "./JsxComponent/AllJsxExample";
import AllFunctionExample from "./FunctionComponent/AllFunctionExample";
import AllStyleExample from "./StyleComponent/AllStyleExample";
import AllStateExample from "./StateComponents/AllStateExample";
import AllClassComponent from "./ClassComponents/AllClassComponent";

export default function App() {
  return (
    <div>
      {/* <AllJsxExample /> */}
      {/* <AllFunctionExample /> */}
      {/* <AllStyleExample /> */}
      <AllStateExample />
      {/* <AllClassComponent /> */}
    </div>
  );
}
