import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button style={{ padding: "15px" }} onClick={decrease}>
        -
      </button>
      <button style={{ padding: "15px" }} onClick={increase}>
        +
      </button>
    </div>
  );
}
