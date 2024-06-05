import React, { useEffect, useState } from 'react'
import "./Router.css"
import { Link } from 'react-router-dom'

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const Record = JSON.parse(localStorage.getItem("Student"));
        setData(Record);
    }, [])

    const handleDelete = (index) => {
        let newRecord = data.filter((e, i) => i != index);
        localStorage.setItem("Student", JSON.stringify(newRecord));
        setData(newRecord);
    };

    return (
        <div className='container'>
            <div className="head">
                <h1>Data.io</h1>
                <Link to={"/form"} ><button>Add task</button></Link>
            </div>
            <div className="task-table">
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Subject</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ?
                            data.map((e, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.mail}</td>
                                    <td>{e.sub.map((e, i) => { return ` ${e} ` })}</td>
                                    <td>{e.checked}</td>
                                    <td>{e.city}</td>
                                    <td><button onClick={() => handleEdit(i)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(i)}>Delete</button></td>
                                </tr>
                            }) : null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
