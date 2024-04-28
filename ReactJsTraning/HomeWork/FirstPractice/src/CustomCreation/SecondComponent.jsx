import React from "react";
import "./Second.css";

export default function SecondComponent() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="text">
          <h4>Welcome</h4>
          <h1>Smart Ideas For Your Brand Here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            laboriosam consequuntur doloremque corporis ab culpa?
          </p>
          <button>Contact Us Now</button>
        </div>
        <div className="img">
          <img src={"bg.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
