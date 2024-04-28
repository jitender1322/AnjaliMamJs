import React from "react";

export default function MyFunctionComponent5() {
  const subject = ["c", "c++", "java", "python", "javascript"];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {subject.map((e, i) => {
              return <td key={i}>{e}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
