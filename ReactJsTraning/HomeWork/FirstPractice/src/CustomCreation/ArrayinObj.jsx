import React, { useState } from "react";
import ArrayinObj2 from "./ArrayinObj2";

export default function ArrayinObj() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("");

  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");

  const [click, setClick] = useState(false);

  const obj = [
    {
      id: data1,
      name: data2,
      city: data3,
      subject: data4,
    },
  ];

  const handler = () => {
    setData1(id);
    setData2(name);
    setData3(city);
    setData4(subject);

    setClick(true);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter id"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      <button onClick={handler}>Add</button>

      {click == true && <ArrayinObj2 product={obj} />}
    </div>
  );
}
