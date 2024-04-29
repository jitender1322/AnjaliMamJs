import React, { useState } from "react";

export default function StateExample3() {
  const [bgcolor, setBgcolor] = useState("white");
  return (
    <div style={{ backgroundColor: bgcolor }}>
      <h1>hello</h1>
      <button onClick={() => setBgcolor("aqua")}>change color</button>
    </div>
  );
}
