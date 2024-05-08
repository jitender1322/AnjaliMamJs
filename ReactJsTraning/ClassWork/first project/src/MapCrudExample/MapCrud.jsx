import React, { useState } from "react";

export default function MapCrud() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");

  const [record, setRecord] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { name, subject, city };
    setRecord([...record, newRecord]);

    setName("");
    setSubject("");
    setCity("");
  };

  const handleEdit = (index) => {
    const fetchData = record[0];

    setName(fetchData.name);
    setSubject(fetchData.subject);
    setCity(fetchData.city);
  };

  const handleDelete = (index) => {
    let lastRecord = record;
    lastRecord.splice(index, 1);
    setRecord([...lastRecord]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e?.target?.value)}
        />
        <input
          type="text"
          placeholder="Enter Subject"
          value={subject}
          onChange={(e) => setSubject(e?.target?.value)}
        />
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e?.target?.value)}
        />
        <input type="submit" value={"Submit"} />
      </form>

      <hr />

      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {record.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.subject}</td>
                <td>{item.city}</td>
                <td>
                  {<button onClick={() => handleEdit(index)}>Edit</button>}
                </td>
                <td>
                  {<button onClick={() => handleDelete(index)}>Delete</button>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
