import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";

function App(props) {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async (keyword) => {
    try {
      // (url, option)
      const response = await fetch(`/api?kw=${keyword ? keyword : ""}`, {
        method: "get",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: null,
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const json = await response.json();

      if (json.result !== "success") {
        throw new Error(json.message);
      }
      setEmails(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div id="App">
      <RegisterForm />
      <Searchbar fetchEmails={fetchEmails} />
      <Emaillist emails={emails} />
    </div>
  );
}

export default App;
