import React, { useState } from "react";

export default function GussesName() {
  const [name, setName] = useState(0);

  const student = ["arjun", "deepak", "jitender", "gaurav", "praveen", "sumit"];

  const listener = () => {
    const rNum = Math.floor(Math.random() * student.length);
    setName(rNum);
  };
  return (
    <div>
      <h1>{student[name]}</h1>
      <button onClick={listener}>change</button>
    </div>
  );
}
