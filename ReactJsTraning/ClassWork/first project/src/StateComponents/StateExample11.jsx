import React, { useState } from "react";

export default function StateExample11() {
  const [myarray, setMyarray] = useState([]);
  const [sub, setSubject] = useState("");

  const handler = () => {
    setMyarray([...myarray, sub]);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setSubject(e?.target?.value)} />
      <button onClick={handler}>add</button>
      {myarray.map((e, i) => {
        return <h3 key={i}> {e} </h3>;
      })}
    </div>
  );
}
