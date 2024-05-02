import React, { useState } from "react";
import ChildComponent4 from "./ChildComponent4";

export default function ParentComponent4() {
  const [islogin, setIslogin] = useState(false);
  const [msg, setMsg] = useState("my react msg");

  const handler = () => {
    setIslogin(!islogin);
  };
  return (
    <div>
      <button onClick={handler}> click</button>
      {islogin && <ChildComponent4 msg={msg} />}
    </div>
  );
}
