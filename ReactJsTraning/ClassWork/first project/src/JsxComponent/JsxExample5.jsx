import React from "react";
import Profile from "./ExtraComponent/Profile";
import Login from "./ExtraComponent/Login";

export default function JsxExample5() {
  const islogin = false;
  let element;
  if (islogin) {
    element = <Profile />;
  } else {
    element = <Login />;
  }

  return element;
}
