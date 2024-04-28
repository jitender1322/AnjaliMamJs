import React from "react";

export default function StyleComponentExample2() {
  const style = {
    Mystyle: { backgroundColor: "black", height: "100px", width: "100px" },
  };
  return (
    <div>
      <div style={style.Mystyle}></div>
    </div>
  );
}
