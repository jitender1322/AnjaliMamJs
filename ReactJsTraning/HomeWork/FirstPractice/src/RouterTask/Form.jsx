import React, { useState } from 'react'
import "./Router.css"
import { Link } from 'react-router-dom'

export default function Form() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [check1, setCheck1] = useState("");
    const [check2, setCheck2] = useState("");
    const [check3, setCheck3] = useState("");
    const [check4, setCheck4] = useState("");
    const [city, setCity] = useState("");
    const [checked, setChecked] = useState("");

    const handleSubmit = () => {
        let obj = { name, mail, check1, check2, check3, check4, city, checked };
        const record = JSON.parse(localStorage.getItem("Student")) || [];
        record.push(obj);
        localStorage.setItem("Student", JSON.stringify(record));
    }

    return (
        <div className='container' >
            <h1>Form</h1>
            <div className="form">
                <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Enter Your Email" onChange={(e) => setMail(e.target.value)} />

                <h4>Subjects</h4>
                <label>ReactJs<input type="checkbox" value='ReactJs' onChange={(e) => setCheck1(e.target.value)} /></label>
                <label>NodeJs<input type="checkbox" value='NodeJs' onChange={(e) => setCheck2(e.target.value)} /></label>
                <label>Python<input type="checkbox" value='Python' onChange={(e) => setCheck3(e.target.value)} /></label>
                <label>JavaScript<input type="checkbox" value='JavaScript' onChange={(e) => setCheck4(e.target.value)} /></label>

                <h4>City</h4>
                <select onChange={(e) => setCity(e.target.value)} >
                    <option hidden>Select City</option>
                    <option value='ahmedabad'>Ahmedabad</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='rajkot'>Rajkot</option>
                    <option value='surat'>Surat</option>
                </select>

                <h4>Gender</h4>
                <label>Male<input type="radio" name="gender" value='male' onChange={(e) => setChecked(e.target.value)} /></label>
                <label>Female <input type="radio" name="gender" value='female' onChange={(e) => setChecked(e.target.value)} /></label><br />

                <Link to={'/'}><button onClick={handleSubmit}>Submit </button></Link>
            </div>
        </div>
    )
}
