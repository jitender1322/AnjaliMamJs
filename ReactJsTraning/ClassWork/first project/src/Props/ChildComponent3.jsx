import React from "react";

export default function ChildComponent3(props) {
  return (
    <div>
      <button onClick={props.myFun}>Click - child component</button>
    </div>
  );
}
