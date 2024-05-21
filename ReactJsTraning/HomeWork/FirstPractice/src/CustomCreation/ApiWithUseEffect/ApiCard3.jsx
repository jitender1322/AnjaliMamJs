import React, { useEffect, useState } from "react";

export default function ApiCard3() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    handleApi();
  }, [id]);

  const handleApi = async () => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    let result = await response.json();
    setData(result);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Enter Id"
        onChange={(e) => setId(e?.target?.value)}
      />
      {data ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
