import React from "react";
import MyFunctionComponent2 from "./MyFunctionComponent2";

export default function MyFunctionComponent3() {
  const subject = ["c++", "java", "python"];
  return (
    <div>
      {subject.map((e, i) => {
        return <MyFunctionComponent2 key={i} />;
      })}
    </div>
  );
}
