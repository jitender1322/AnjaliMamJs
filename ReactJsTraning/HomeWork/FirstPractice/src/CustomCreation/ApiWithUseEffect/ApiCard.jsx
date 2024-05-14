import React, { useEffect, useState } from "react";
import "./Api.css";

export default function ApiCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    handleApi();
  }, []);

  const handleApi = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await response.json();
    setData(res);
  };
  return (
    <div>
      <div className="container">
        {data ? (
          data.map((item, index) => {
            return (
              <div key={index} className="box">
                <p>Id : {item.id}</p>
                <p>Name : {item.name}</p>
                <p>Username : {item.username}</p>
                <p>Email : {item.email}</p>
                <p>
                  Address :
                  <ul>
                    <li>Street : {item.address.street}</li>
                    <li>Suite : {item.address.suite}</li>
                    <li>City : {item.address.city}</li>
                    <li>Zipcode : {item.address.zipcode}</li>
                    <li>
                      Geo :
                      <ul>
                        <li>Lat : {item.address.geo.lat}</li>
                        <li>Lng : {item.address.geo.lng}</li>
                      </ul>
                    </li>
                  </ul>
                </p>
                <p>Phone : {item.phone}</p>
                <p>Website : {item.website}</p>
                <p>
                  Company :
                  <ul>
                    <li>Name : {item.company.name}</li>
                    <li>Catch Phrase : {item.company.catchPhrase}</li>
                    <li>Bs : {item.company.bs}</li>
                  </ul>
                </p>
              </div>
            );
          })
        ) : (
          <p>Loding.....</p>
        )}
      </div>
    </div>
  );
}
