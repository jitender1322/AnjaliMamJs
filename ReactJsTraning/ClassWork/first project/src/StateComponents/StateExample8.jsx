import React, { useState } from "react";

export default function () {
  const [username, setUsername] = useState("");
  const [data, setData] = useState("");

  const handleButton = () => {
    setData(username);
    setUsername("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleButton}>submit</button>
      <h1>{data}</h1>
    </div>
  );
}
