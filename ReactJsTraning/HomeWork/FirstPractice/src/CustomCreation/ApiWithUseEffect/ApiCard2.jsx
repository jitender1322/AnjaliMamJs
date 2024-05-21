import React, { useEffect, useState } from "react";

export default function ApiCard2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    handleApi();
  }, []);

  const handleApi = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const res = await response.json();
    setData(res);
  };
  return (
    <div>
      <div className="container">
        {data ? (
          data.data.map((item, index) => {
            return (
              <div key={index} className="box">
                <img src={item.avatar} alt="" />
                <p>{item.id}</p>
                <p>{item.first_name}</p>
                <p>{item.last_name}</p>
                <p>{item.email}</p>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}
