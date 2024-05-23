import React, { useState } from "react";

export default function CRUDExample() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [student, setStudent] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { name, subject, city };
    setStudent([...student, obj]);
    localStorage.setItem("MyRecords", JSON.stringify(student));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
