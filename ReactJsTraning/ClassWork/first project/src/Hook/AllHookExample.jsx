import React from "react";
import HookExample1 from "./HookExample1";
import HookExample2 from "./HookExample2";
import HookExample3 from "./HookExample3";
import HookExample4 from "./HookExample4";
import HookExample5 from "./HookExample5";
import UseRefExp1 from "./UseRefExample/UseRefExp1";
import UseRefExp2 from "./UseRefExample/UseRefExp2";
import UseRefExp3 from "./UseRefExample/UseRefExp3";
import Problam1 from "./UseContextExample/Problam1";
import UseContextExp1 from "./UseContextExample/UseContextExp1";
import UseContextExp2 from "./UseContextExample/UseContextExp2";
import ParentTheme from "./UseContextExample/ParentTheme";
import ChildTheme from "./UseContextExample/ChildTheme";
import UseRefWithClass1 from "./UseRefExample/UseRefWithClass1";
import UseRefWithClass2 from "./UseRefExample/UseRefWithClass2";
import UseRefWithClass3 from "./UseRefExample/UseRefWithClass3";

export default function AllHookExample() {
  return (
    <div>
      {/* <HookExample1 /> */}
      {/* <HookExample2 /> */}
      {/* <HookExample3 /> */}
      {/* <HookExample4 /> */}
      {/* <HookExample5 /> */}


      {/* <UseRefExp1/> */}
      {/* <UseRefExp2/> */}
      {/* <UseRefExp3/> */}
      {/* <UseRefWithClass1 /> */}
      {/* <UseRefWithClass2 /> */}
      <UseRefWithClass3 />

      {/* <Problam1 /> */}
      {/* <UseContextExp1 /> */}
      {/* <UseContextExp2 /> */}
      {/* <ParentTheme>
        <ChildTheme />
      </ParentTheme> */}
    </div>
  );
}
