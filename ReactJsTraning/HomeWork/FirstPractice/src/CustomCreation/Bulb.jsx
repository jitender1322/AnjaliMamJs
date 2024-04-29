import React, { useState } from "react";

export default function Bulb() {
  const [isOn, setIson] = useState(true);

  const btnHandler = (e) => {
    setIson(!isOn);

    if (e.target.textContent == "on") {
      e.target.textContent = "off";
    } else {
      e.target.textContent = "on";
    }
  };

  return (
    <div>
      {isOn ? (
        <img style={{ width: "10%" }} src={"bulb_off.png"} alt="" />
      ) : (
        <img style={{ width: "10%" }} src={"bulb.png"} alt="" />
      )}

      <button onClick={btnHandler}>on</button>
    </div>
  );
}
