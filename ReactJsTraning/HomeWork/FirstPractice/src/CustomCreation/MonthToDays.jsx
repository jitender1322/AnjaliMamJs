import React from "react";
import { useState } from "react";

export default function MonthToDays() {
  const [month, setMonth] = useState(0);
  const [data, setData] = useState(0);

  const btnHandler = () => {
    setData(month * 30);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setMonth(e.target.value)} />
      <button onClick={btnHandler}>get Days</button>
      <h1>{data}</h1>
    </div>
  );
}
