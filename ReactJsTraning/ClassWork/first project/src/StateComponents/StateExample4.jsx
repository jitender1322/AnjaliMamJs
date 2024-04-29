import React, { useState } from "react";

export default function StateExample4() {
  const [isvisible, setVisible] = useState(false);
  //   const handleButton = () => {
  //     if(isvisible){
  //         setVisible(false)
  //     }
  //     else{
  //         setVisible(true)
  //     }
  //     setVisible(!isvisible);
  //   };

  return (
    <div>
      {isvisible ? <h1>Hello i'm visible</h1> : <h2>h1 Is now hidden</h2>}
      <button onClick={() => setVisible(!isvisible)}>onClick</button>
    </div>
  );
}
