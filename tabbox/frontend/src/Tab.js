import React from "react";
import { Tab_Item, _active } from "./assets/scss/Tab.scss";
function Tab({ name, active }) {
  return (
    //<li className={[active ? "active" : "", Tab_Item].join(" ")}>{name}</li>
    <li className={`${active ? `${_active}` : ""} ${Tab_Item}`}>{name}</li>
  );
}

export default Tab;
