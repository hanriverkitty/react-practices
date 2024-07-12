import React from "react";
import Tabs from "./Tabs";
import TabView from "./TabView";
import { Tab_Box } from "./assets/scss/TabBox.scss";
function TabBox() {
  const tabs = [
    { no: 1, name: "메뉴1", active: false, contents: "메뉴 1입니다" },
    { no: 2, name: "메뉴2", active: false, contents: "메뉴 2입니다" },
    { no: 3, name: "메뉴3", active: true, contents: "메뉴 3입니다" },
    { no: 4, name: "메뉴4", active: false, contents: "메뉴 4입니다" },
    { no: 5, name: "메뉴5", active: false, contents: "메뉴 5입니다" },
  ];

  return (
    <div className={Tab_Box}>
      <Tabs
        tabs={tabs.map((e) => {
          const { contents, ...rest } = e;
          return rest;
        })}
      />
      <TabView tabs={tabs} />
    </div>
  );
}

export default TabBox;
