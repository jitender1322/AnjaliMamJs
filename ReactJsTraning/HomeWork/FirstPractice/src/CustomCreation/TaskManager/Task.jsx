import React, { useEffect, useState } from "react";
import "./style.css"

export default function Task() {
  const [task, setTask] = useState('');
  const [des, setDes] = useState('');
  const [checked, setChecked] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("Task")) || [];
    setData(allData);
  }, []);

  const handleSubmit = () => {
    let obj = { task, des, checked, status: 'pending' };
    setData([...data, obj]);

    localStorage.setItem("Task", JSON.stringify([...data, obj]));
  }

  const handleStatus = (index) => {
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, status: "Completed" } : item
    );
    setData(updatedData);
    localStorage.setItem("Task", JSON.stringify(updatedData));
  };

  return (
    <div>
      <div className="container">
        <h1>Task Manager</h1>
        <div className="form">
          <input type="text" placeholder="Task Title" onChange={(e) => setTask(e.target.value)} />
          <input type="text" placeholder="Task Description" onChange={(e) => setDes(e.target.value)} /><br />
          <label>Priority :</label>
          <label><input type="radio" name="priority" value='low' onChange={(e) => setChecked(e.target.value)} />Low</label>
          <label> <input type="radio" name="priority" value='medium' onChange={(e) => setChecked(e.target.value)} />Medium</label>
          <label> <input type="radio" name="priority" value='high' onChange={(e) => setChecked(e.target.value)} />High</label><br />

          <button onClick={handleSubmit}>Submit</button>
        </div>

        <div className="task-table">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Task</th>
                <th>Description</th>
                <th>Priority</th>
                <th colSpan={2}>Action</th>
                <th>Mark as Completed</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((e, i) => {
                  return <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.task}</td>
                    <td>{e.des}</td>
                    <td>{e.checked}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                    <td><button onClick={() => handleStatus(i)} disabled={e.status == "Completed"}  >Mark as Completed</button></td>
                    <td>{e.status}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
