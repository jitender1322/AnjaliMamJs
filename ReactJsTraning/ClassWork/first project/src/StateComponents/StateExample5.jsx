import React, { useState } from "react";

export default function StateExample5() {
  const [color, setColor] = useState("black");
  return (
    <div>
      <h1 style={{ color: color }}>Change my color</h1>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("brown")}>brown</button>
    </div>
  );
}
