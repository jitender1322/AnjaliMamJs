import React, { useState } from "react";

export default function StateExample2() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("my react")}>click</button>
    </div>
  );
}
