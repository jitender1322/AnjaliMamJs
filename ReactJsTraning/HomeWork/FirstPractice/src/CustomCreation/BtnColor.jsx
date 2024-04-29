import React, { useState } from "react";

export default function BtnColor() {
  const [bg, setBg] = useState(0);
  const [color, setColor] = useState(0);

  const colors = [
    "grey",
    "pink",
    "yellow",
    "black",
    "blue",
    "aqua",
    "green",
    "brown",
  ];
  const rnum = Math.floor(Math.random() * colors.length);
  const rnum2 = Math.floor(Math.random() * colors.length);

  const btnHandler = () => {
    setBg(rnum);
    setColor(rnum2);
  };
  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "15px",
          fontSize: "20px",
          backgroundColor: colors[bg],
          color: colors[color],
          margin: "20px",
        }}
        onClick={btnHandler}
      >
        Magic
      </button>
    </div>
  );
}
