import React, { useState } from "react";

export default function StateExample6() {
  const [bgColor, setBgColor] = useState(0);

  const colors = ["red", "green", "brown", "aqua", "pink"];
  const btnHandler = () => {
    const rNum = Math.floor(Math.random() * colors.length);
    setBgColor(rNum);
  };
  return (
    <div style={{ backgroundColor: colors[bgColor] }}>
      <h1>hello</h1>
      <button onClick={btnHandler}>change</button>
    </div>
  );
}
