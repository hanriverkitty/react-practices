import React from "react";
import { Tab_Item /*, _active */ } from "./assets/scss/Tab.scss";
function Tab({ no, name, active, selectTab }) {
  return (
    <li
      className={[active ? "active" : "", Tab_Item].join(" ")}
      onClick={() => {
        selectTab(no);
      }}
    >
      {name}
    </li>
    // <li
    //   className={`${active ? `${_active}` : ""} ${Tab_Item}`}
    //   onClick={() => {
    //     selectTab(no);
    //   }}
    // >
    //   {name}
    // </li>
  );
}

export default Tab;
