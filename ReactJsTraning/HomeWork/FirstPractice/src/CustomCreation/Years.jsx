import React from "react";
import { useState } from "react";

export default function Years() {
  const [year, setYear] = useState("");
  const [dataone, setDataone] = useState("");
  const [datatwo, setDatatwo] = useState("");

  const btnHandler = () => {
    setDataone(year * 12);
    setDatatwo(year * 12 * 30);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setYear(e.target.value)} />
      <button onClick={btnHandler}>get data</button>
      <input type="text" value={dataone} />
      <input type="text" value={datatwo} />
    </div>
  );
}
