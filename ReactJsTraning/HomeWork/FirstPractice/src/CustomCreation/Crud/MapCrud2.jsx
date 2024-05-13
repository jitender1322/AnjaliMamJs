import React, { useState } from "react";

export default function MapCrud2() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");

  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { name, subject, city };

    if (value === null) {
      setData([...data, obj]);
    } else {
      data[value] = obj;
      setData([...data]);
    }

    setName("");
    setSubject("");
    setCity("");
  };

  const handelDelete = (index) => {
    const oldData = data;
    oldData.splice(index, 1);
    setData([...oldData]);
  };

  const handleEdit = (index) => {
    const olddata = data[index];
    setName(olddata.name);
    setSubject(olddata.subject);
    setCity(olddata.city);

    setValue(index);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e?.target?.value)}
        />
        <input
          type="text"
          value={subject}
          placeholder="Enter Subject"
          onChange={(e) => setSubject(e?.target?.value)}
        />
        <input
          type="text"
          value={city}
          placeholder="Enter City"
          onChange={(e) => setCity(e?.target?.value)}
        />

        <button type="submit">{value != null ? "Update" : "Submit"}</button>
      </form>

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
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td> {item.name} </td>
                <td> {item.subject} </td>
                <td> {item.city} </td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handelDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
