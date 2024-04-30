import React from "react";
import { useState } from "react";

export default function DaysToMonth() {
  const [days, setDays] = useState(0);
  const [data, setData] = useState(0);

  const btnHandler = () => {
    setData(days / 30);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setDays(e.target.value)} />
      <button onClick={btnHandler}>get Days</button>
      <h1>{data}</h1>
    </div>
  );
}
