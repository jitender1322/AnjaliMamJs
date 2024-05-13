import React, { useEffect, useState } from "react";

export default function HookExample3() {
  const [color, setColor] = useState("");

  //   let arr = ["white", "red", "green", "yellow"];
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <button onClick={() => setColor("red")}>change</button>
      <button onClick={() => setColor("green")}>change</button>
      <button onClick={() => setColor("pink")}>change</button>
    </div>
  );
}
