import React, { useEffect, useState } from "react";

export default function HookExample2() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("useEffect is calling");
  }, [count]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}> click here for count</button>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}> click here for num</button>
    </div>
  );
}
