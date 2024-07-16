import React, { useState } from "react";
import Tabs from "./Tabs";
import TabView from "./TabView";
import { Tab_Box } from "./assets/scss/TabBox.scss";
import tabs from "./assets/json/data";

function TabBox() {
  // const [idx, setIdx] = useState(tabs[0].no);
  const [idx, setIdx] = useState(0);

  const selectTab = function (no) {
    // const index = tabs.map((e) => e.no).indexOf(no);
    // setIdx(index);
    setIdx(tabs.findIndex((e) => e.no === no));
  };

  return (
    <div className={Tab_Box}>
      <Tabs
        // selectTab={(no) => {
        //   setIdx(no);
        // }}
        selectTab={selectTab}
        tabs={tabs.map((e, i) => {
          const { contents, ...rest } = e;
          // rest.no === idx ? (rest.active = true) : "";
          if (i === idx) {
            rest.active = true;
          }
          return rest;
        })}
      />
      <TabView tabs={tabs} />
    </div>
  );
}

export default TabBox;
