import React from "react";

export default function ArrayinObj2(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>City</td>
            <td>Subject</td>
          </tr>
          {props.product.map((item, i) => {
            return (
              <tr key={i}>
                <td> {item.id} </td>
                <td> {item.name} </td>
                <td> {item.city} </td>
                <td> {item.subject} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
