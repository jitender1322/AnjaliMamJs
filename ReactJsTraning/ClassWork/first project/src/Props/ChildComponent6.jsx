import React from "react";

export default function ChildComponent6(props) {
  return (
    <div>
      {props.sub.map((e, i) => {
        return <h3 key={i}> {e} </h3>;
      })}
    </div>
  );
}
