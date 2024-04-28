import React from "react";
import Admin from "./ExtraComponent/Admin";
import Customer from "./ExtraComponent/Customer";
import Supplier from "./ExtraComponent/Supplier";

export default function JsxExample6() {
  const userRole = "Supplier";

  switch (userRole) {
    case "Admin":
      return <Admin />;
    case "Customer":
      return <Customer />;
    case "Supplier":
      return <Supplier />;
  }
}
