import React from "react";
import { _Email } from "./assets/scss/Email.scss";
function Email({ name, email }) {
  return (
    <li className={_Email}>
      {name}
      <br></br>
      {email}
    </li>
  );
}

export default Email;
