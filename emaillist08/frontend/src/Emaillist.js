import React from "react";
import { _Emaillist } from "./assets/scss/Emaillist.scss";
import Email from "./Email";
import emails from "./assets/json/data.js";
function Emaillist(props) {
  return (
    <ul class={_Emaillist}>
      {emails.map((e) => {
        return <Email name={e.name} email={e.email} />;
      })}
    </ul>
  );
}

export default Emaillist;
