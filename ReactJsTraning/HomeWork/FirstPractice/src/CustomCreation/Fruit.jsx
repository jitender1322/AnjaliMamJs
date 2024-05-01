import React from "react";
import "./Fruit.css";
import { useState } from "react";

export default function Fruit() {
  const [array, setArray] = useState([]);
  const [fruit, setFruit] = useState("");
  const [array2, setArray2] = useState([]);

  const handler = () => {
    setArray([...array, fruit]);
    setFruit("");
  };

  const reverse = () => {
    setArray2([...array].reverse());
  };
  return (
    <div className="container">
      <input
        value={fruit}
        type="text"
        placeholder="Enter Fruit Name"
        onChange={(e) => setFruit(e?.target?.value)}
      />
      <ul>
        {array.map((e, i) => {
          return <li key={i}> {e} </li>;
        })}
      </ul>
      <ul>
        {array2.map((e, i) => {
          return <li key={i}> {e} </li>;
        })}
      </ul>
      <button onClick={handler}>Add</button>
      <button onClick={reverse}>Reverse</button>
    </div>
  );
}
