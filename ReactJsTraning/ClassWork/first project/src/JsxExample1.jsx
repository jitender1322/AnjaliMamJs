import React from "react";

export default function JsxExample1() {
  const subject = "javascript";
  const greeting = <p>good morning</p>;
  return (
    <div>
      <h1>My fav language{subject}</h1> {/* html code */}
      {greeting}
    </div>
  );
}
