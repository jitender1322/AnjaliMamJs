import React from "react";

export default function ArrayinObj2(props) {
  return (
    <div>
      {props.product.map((item, i) => {
        return (
          <div key={i}>
            <h3> {item.id} </h3>
            <h3> {item.name} </h3>
            <h3> {item.city} </h3>
            <h3> {item.subject} </h3>
          </div>
        );
      })}
    </div>
  );
}
