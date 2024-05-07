import React, { useState } from "react";

export default function LocalStorageExample1() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const handler = () => {
    localStorage.setItem(name, subject);
    setMsg("Successfully record added");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e?.target?.value)}
      />
      <input
        type="text"
        placeholder="Enter Subject"
        onChange={(e) => setSubject(e?.target?.value)}
      />
      <button onClick={handler}>Submit</button>
      <h3>{msg}</h3>
    </div>
  );
}
