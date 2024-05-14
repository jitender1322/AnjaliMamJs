import React from "react";

export default function Task() {
  return (
    <div style={{ textAlign: "center", margin: "10px 0" }}>
      <input type="text" placeholder="Task Title" />
      <input type="text" placeholder="Task Description" />
      <select>
        <option hidden>Task Pripority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input type="text" value={"pending"} disabled />
      <button>Submit</button>
    </div>
  );
}
