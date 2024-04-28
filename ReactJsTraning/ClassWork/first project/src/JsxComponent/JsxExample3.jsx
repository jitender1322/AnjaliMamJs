import React from "react";
import Profile from "./ExtraComponent/Profile";
// terrnary operator and conditional operator

// terrnary operator are divided in three parts

// ternnary operator represented with ? :

// syntax exp1 ? exp2 : exp3

export default function JsxExample3() {
  const isLogin = true;
  return <div>{isLogin ? <Profile /> : <h1>login page</h1>}</div>;
}
