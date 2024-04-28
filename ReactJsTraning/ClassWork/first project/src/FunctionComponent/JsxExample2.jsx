import React from "react";

export default function JsxExample2() {
  const status = true;
  //   logical && operator
  return (
    <div>
      {status && <h1>hello user</h1>}
      {/*  */}
    </div>
  );
}
