import React, { useState } from "react";

export default function FontSize() {
  const [count, setCount] = useState(16);
  const increase = () => {
    setCount(count + 5);
    console.log(count);
  };
  const decrease = () => {
    setCount(count - 5);
    console.log(count);
  };
  return (
    <div>
      <h1 style={{ fontSize: count }}>Play with Font Size</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
