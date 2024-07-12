import React from "react";
import Tab from "./Tab";
import { Tabs_ } from "./assets/scss/Tabs.scss";

function Tabs({ tabs }) {
  return (
    <ul className={Tabs_}>
      {tabs.map((e) => {
        return <Tab key={e.no} no={e.no} name={e.name} active={e.active} />;
      })}
    </ul>
  );
}

export default Tabs;
