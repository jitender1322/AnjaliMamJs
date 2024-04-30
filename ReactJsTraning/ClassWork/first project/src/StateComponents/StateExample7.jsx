import React, { useState } from "react";

export default function StateExample7() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <h1>{username}</h1>
    </div>
  );
}
