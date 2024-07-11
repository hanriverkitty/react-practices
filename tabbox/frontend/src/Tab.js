import React from "react";

function Tab({ no, name, active, contents }) {
  return <li className={active ? "active" : ""}>{name}</li>;
}

export default Tab;
