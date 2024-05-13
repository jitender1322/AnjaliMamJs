import React, { useState } from "react";

export default function MapCrud3() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const [result, setResult] = useState([]);
  const [value, setValue] = useState(null);

  const handleSubmit = (e) => {
    let obj = { name, city };
    if (value === null) {
      setResult([...result, obj]);
    } else {
      result[value] = obj;
      setResult([...result]);
    }

    setName("");
    setCity("");
  };

  const handleDelete = (index) => {
    let oldData = result;
    oldData.splice(index, 1);
    setResult([...oldData]);
  };

  const handleEdit = (index) => {
    let oldData = result[index];
    setName(oldData.name);
    setCity(oldData.city);
    setValue(index);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e?.target?.value)}
      />
      <input
        type="text"
        value={city}
        placeholder="city"
        onChange={(e) => setCity(e?.target?.value)}
      />
      <button onClick={handleSubmit}>
        {value != null ? "update" : "submit"}
      </button>

      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>name</th>
            <th>city</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>
                  {<button onClick={() => handleEdit(index)}>edit</button>}
                </td>
                <td>
                  {<button onClick={() => handleDelete(index)}>delete</button>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
