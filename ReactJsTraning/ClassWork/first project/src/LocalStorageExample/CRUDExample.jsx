import React, { useEffect, useState } from "react";

export default function CRUDExample() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [student, setStudent] = useState([]);

  const [index, setIndex] = useState(null);

  useEffect(() => {
    let allRecords = JSON.parse(localStorage.getItem("Students")) || [];
    setStudent(allRecords);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { id: Date.now(), name, subject, city };
    if (index === null) {
      setStudent([...student, obj]);
      localStorage.setItem("Students", JSON.stringify([...student, obj]));
    } else {
      let oldRecord = student[index];
      oldRecord.name = name;
      oldRecord.subject = subject;
      oldRecord.city = city;

      localStorage.setItem("Students", JSON.stringify([...student, oldRecord]));
      setIndex(null);
    }

    setName("");
    setSubject("");
    setCity("");
  };

  const handleDelete = (index) => {
    let newRecord = student.filter((e, i) => i !== index);
    setStudent(newRecord);

    localStorage.setItem("Students", JSON.stringify(newRecord));
  };

  const handleEdit = (index) => {
    setName(student[index].name);
    setSubject(student[index].subject);
    setCity(student[index].city);

    setIndex(index);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">{index === null ? "Submit" : "Update"}</button>
      </form>
      <table border={2}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.subject}</td>
                <td>{e.city}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>EDIT</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(i)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
