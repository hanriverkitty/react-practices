import React from "react";
import TabBox from "./TabBox";
import "../src/assets/css/App.css";

function App() {
  const tabs = [
    { no: 1, name: "메뉴1", active: false, contents: "메뉴 1입니다" },
    { no: 2, name: "메뉴2", active: false, contents: "메뉴 2입니다" },
    { no: 3, name: "메뉴3", active: true, contents: "메뉴 3입니다" },
    { no: 4, name: "메뉴4", active: false, contents: "메뉴 4입니다" },
    { no: 5, name: "메뉴5", active: false, contents: "메뉴 5입니다" },
  ];

  return <TabBox tabs={tabs} />;
}

export { App };
