import React, { useState } from "react";

// use state is a hook which return stateful value and function - using that function we change state

//in react js classcomponent is use for setState for state modification

export default function StateExample1() {
  const [count, setCount] = useState(0);

  const buttonHandler = () => {
    console.log("button clicked");
    setCount(count + 1);
  };
  return (
    <div>
      <h1>hello {count} </h1>
      <button onClick={buttonHandler}>click</button>
    </div>
  );
}
