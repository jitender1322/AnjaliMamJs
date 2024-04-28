import React from "react";
import "../CustomCreation/First.css";

export default function FirstComponent() {
  return (
    <div className="container">
      <div className="nav">
        <div className="logo">
          <img src={"logo.png"} alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
        <div className="icons">
          <i className="bi bi-search"></i>
          <i className="bi bi-grid"></i>
        </div>
      </div>
    </div>
  );
}
