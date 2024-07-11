import React from "react";
import Tab from "./Tab";

function Tabs({ tabs }) {
  return (
    <ul>
      {tabs.map((e) => {
        return (
          <Tab
            key={e.no}
            no={e.no}
            name={e.name}
            active={e.active}
            contents={e.contents}
          />
        );
      })}
    </ul>
  );
}

export default Tabs;
