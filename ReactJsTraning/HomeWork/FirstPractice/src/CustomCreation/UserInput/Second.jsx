import React from "react";
import "./Form.css";

export default function Second(props) {
  return (
    <div>
      <div className="card">
        <div className="user-img">
          {props.gender == "male" ? (
            <img src="boy.png" alt="" />
          ) : (
            <img src="girl.png" alt="" />
          )}
        </div>
        <div className="user-info">
          <h4>Name: {props.name}</h4>
          <h4>Gender: {props.gender}</h4>
          <h4>Subject: {props.subject}</h4>
          <h4>E-Mail: {props.mail}</h4>
          <h4>City: {props.city}</h4>
        </div>
      </div>
    </div>
  );
}
