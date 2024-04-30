import React, { useState } from "react";

export default function StateExample10() {
  const [valueone, setValueone] = useState("");
  const [valuetwo, setValuetwo] = useState("");
  const [data, setData] = useState("");
  const plus = () => {
    setData(valueone + valuetwo);
    setValueone("");
    setValuetwo("");
  };
  const minus = () => {
    setData(valueone - valuetwo);
    setValueone("");
    setValuetwo("");
  };
  const multi = () => {
    setData(valueone * valuetwo);
    setValueone("");
    setValuetwo("");
  };
  const divide = () => {
    setData(valueone / valuetwo);
    setValueone("");
    setValuetwo("");
  };
  return (
    <div>
      <input
        type="text"
        value={valueone}
        onChange={(e) => setValueone(Number(e.target.value))}
      />
      <input
        type="text"
        value={valuetwo}
        onChange={(e) => setValuetwo(Number(e.target.value))}
      />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={multi}>x</button>
      <button onClick={divide}>%</button>
      <h1>{data}</h1>
    </div>
  );
}
