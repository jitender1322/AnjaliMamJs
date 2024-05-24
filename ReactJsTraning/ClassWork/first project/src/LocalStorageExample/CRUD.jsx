import React, { useEffect, useState } from "react";

export default function CRUD() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [student, setStudent] = useState([]);

  const [editIndex, setEditindex] = useState(null);

  useEffect(() => {
    // it will call once in a program after refresh
    let allRecords = JSON.parse(localStorage.getItem("Students")) || [];
    setStudent(allRecords);
    // console.log(allRecords);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let s = { id: Date.now(), name, subject, city };
    if (editIndex == null) {
      setStudent([...student, s]);
      //   console.log(student);
      localStorage.setItem("Students", JSON.stringify([...student, s]));
    } else {
      let oldRecord = student[editIndex];
      oldRecord.name = name;
      oldRecord.subject = subject;
      oldRecord.city = city;

      localStorage.setItem("Students", JSON.stringify([...student]));
      setEditindex(null);
    }

    setName("");
    setSubject("");
    setCity("");
  };

  const handleEdit = (index) => {
    setEditindex(index);

    setName(student[index].name);
    setSubject(student[index].subject);
    setCity(student[index].city);
  };

  const handleDelete = (index) => {
    let allRecords = student.filter((e, i) => i !== index);
    setStudent(allRecords);
    localStorage.setItem("Students", JSON.stringify(allRecords));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        ></input>
        <input
          type="text"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        ></input>

        <button type="submit">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <table border={2}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((stu, i) => {
            return (
              <tr key={i}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.subject}</td>
                <td>{stu.city}</td>
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
