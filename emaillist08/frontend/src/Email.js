import React from "react";
import { _Email } from "./assets/scss/Email.scss";
function Email({ key, firstName, lastName, email }) {
  return (
    <li className={_Email}>
      <h4>
        {firstName} {lastName}
      </h4>
      <br />
      <span>{email}</span>
      <a href=""></a>
    </li>
  );
}

export default Email;
