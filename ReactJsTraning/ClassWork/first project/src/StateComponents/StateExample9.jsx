import React, { useState } from "react";

export default function StateExample9() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dataone, setDataone] = useState("");
  const handleBtn = () => {
    setDataone("hello" + firstname + lastname);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setLastname(e.target.value)}
      />
      <button onClick={handleBtn}>submit</button>
      <h1>{dataone}</h1>
    </div>
  );
}
