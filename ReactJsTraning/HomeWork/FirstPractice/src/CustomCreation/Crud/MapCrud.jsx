import React from "react";
import { useState } from "react";

export default function MapCrud() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");

  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = { name, subject, city };

    if (value != null) {
      const newData = [...data];
      newData[value] = obj;
      setData([...newData]);

      setValue(null);
    } else {
      setData([...data, obj]);
    }

    setName("");
    setSubject("");
    setCity("");
  };

  const handleDelete = (index) => {
    const oldData = data;
    oldData.splice(index, 1);
    setData([...oldData]);
  };

  const handleEdit = (index) => {
    const oldData = data[index];
    setName(oldData.name);
    setSubject(oldData.subject);
    setCity(oldData.city);

    setValue(index);
  };

  return (
    <div style={{ textAlign: "center", margin: "10px 0" }}>
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
        <button type="submit">{value != null ? "Update" : "Submit"}</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Subject</td>
            <td>City</td>
            <td colSpan={2}>Action</td>
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
