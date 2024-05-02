import React from "react";
import ChildComponent3 from "./ChildComponent3";

export default function ParentComponent3() {
  const handleClick = () => {
    alert("Hello Guys");
  };
  return (
    <div>
      <ChildComponent3 myFun={handleClick} />
      <button onClick={handleClick}>click - parent component</button>
    </div>
  );
}
