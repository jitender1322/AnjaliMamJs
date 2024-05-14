import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function HookExample4() {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Use Effect is Called");
  }, []);
  return (
    <div>
      {data}
      <button onClick={() => setData(data + 1)}>click here</button>
    </div>
  );
}
