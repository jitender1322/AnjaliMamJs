import React from "react";
import ChildComponent6 from "./ChildComponent6";

export default function ParentComponent6() {
  const arr = ["js", "react", "python", "c++"];
  return (
    <div>
      <ChildComponent6 sub={arr} />
    </div>
  );
}
