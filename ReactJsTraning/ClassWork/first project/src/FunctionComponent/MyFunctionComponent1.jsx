import React from "react";

export default function MyFunctionComponent1() {
  const subject = ["java", "python", "react", "php"];
  return (
    <div>
      {subject.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </div>
  );
}
