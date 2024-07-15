import React, { useState } from "react";
import Tabs from "./Tabs";
import TabView from "./TabView";
import { Tab_Box } from "./assets/scss/TabBox.scss";
import tabs from "./assets/json/data";

function TabBox() {
  const [idx, setIdx] = useState(tabs[0].no);

  return (
    <div className={Tab_Box}>
      <Tabs
        selectTab={(no) => {
          setIdx(no);
        }}
        tabs={tabs.map((e) => {
          const { contents, ...rest } = e;
          rest.no === idx ? (rest.active = true) : "";
          return rest;
        })}
      />
      <TabView tabs={tabs} />
    </div>
  );
}

export default TabBox;
