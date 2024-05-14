import React, { useEffect, useState } from "react";

export default function HookExample5() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await response.json();
    setData(res);
  };
  return (
    <div>
      {data ? (
        data.map((e, i) => {
          return <h3 key={i}>{e.title}</h3>;
        })
      ) : (
        <p>loding.....</p>
      )}
    </div>
  );
}
