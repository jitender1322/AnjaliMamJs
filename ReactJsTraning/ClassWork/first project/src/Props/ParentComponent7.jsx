import React from "react";
import ChildComponent7 from "./ChildComponent7";

export default function ParentComponent7() {
  const prod = [
    { id: 1, name: "jitender", subject: "react" },
    { id: 2, name: "deepak", subject: "js" },
    { id: 3, name: "arjun", subject: "python" },
  ];
  return (
    <div>
      <ChildComponent7 products={prod} />
    </div>
  );
}
