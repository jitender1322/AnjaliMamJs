import React from "react";
import Profile from "./ExtraComponent/Profile";
import Login from "./ExtraComponent/Login";

export default function JsxExample4() {
  const islogin = true;
  if (islogin) {
    return <Profile />;
  } else {
    return <Login />;
  }
}
