import React from "react";
import { useState } from "react";

export default function Factorial() {
  const [ivalue, getIvalue] = useState(0);
  const [data, setData] = useState("");

  let fact = 1;

  const btnHandler = () => {
    for (let i = 1; i <= ivalue; i++) {
      fact *= i;
    }
    setData(fact);
  };

  return (
    <div>
      <input type="text" onChange={(e) => getIvalue(e.target.value)} />
      <button onClick={btnHandler}>Get Factorial</button>
      <h1>{data}</h1>
    </div>
  );
}
