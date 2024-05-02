import React from "react";
import { useState } from "react";
import Second from "./Second";
import "./Form.css";

export default function First() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [sub, setSub] = useState("");
  const [mail, setMail] = useState("");
  const [city, setCity] = useState("");

  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  const [data5, setData5] = useState("");

  const [clicked, setCliked] = useState(false);

  const handler = () => {
    setData1(name);
    setData2(gender);
    setData3(sub);
    setData4(mail);
    setData5(city);

    setCliked(true);
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          onChange={(e) => setName(e?.target?.value)}
          placeholder="Enter Your Name"
        />{" "}
        <select
          name="gender"
          id="gender"
          onChange={(e) => setGender(e?.target?.value)}
        >
          <option value="">Select Your Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>{" "}
        <input
          type="text"
          onChange={(e) => setSub(e?.target?.value)}
          placeholder="Enter Your Subject"
        />{" "}
        <input
          type="mail"
          onChange={(e) => setMail(e?.target?.value)}
          placeholder="Enter Your E-Mail"
        />{" "}
        <input
          type="text"
          onChange={(e) => setCity(e?.target?.value)}
          placeholder="Enter Your City"
        />{" "}
        <button onClick={handler}>Submit</button>
      </div>
      {clicked && (
        <Second
          name={data1}
          gender={data2}
          subject={data3}
          mail={data4}
          city={data5}
        />
      )}
    </div>
  );
}
