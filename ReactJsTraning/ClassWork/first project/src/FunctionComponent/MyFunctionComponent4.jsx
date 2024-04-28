import React from "react";

export default function MyFunctionComponent4() {
  const subject = ["c", "c++", "java", "python", "javascript"];
  return (
    <div>
      <ul>
        {subject.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}
