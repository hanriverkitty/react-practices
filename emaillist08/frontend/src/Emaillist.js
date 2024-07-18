import React from "react";
import { _Emaillist } from "./assets/scss/Emaillist.scss";
import Email from "./Email";
function Emaillist({ emails, deleteEmail }) {
  return (
    <ul className={_Emaillist}>
      {emails?.map((e) => {
        return (
          <Email
            key={e.no}
            no={e.no}
            firstName={e.firstName}
            lastName={e.lastName}
            email={e.email}
            deleteEmail={deleteEmail}
          />
        );
      })}
    </ul>
  );
}

export default Emaillist;
