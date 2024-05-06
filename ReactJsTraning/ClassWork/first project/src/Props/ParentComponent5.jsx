import React from "react";
import ChildComponent5 from "./ChildComponent5";

export default function ParentComponent5() {
  return (
    <div>
      <ChildComponent5 subject="mern" />
      <ChildComponent5 />
    </div>
  );
}
