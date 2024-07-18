import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";

function App() {
  const [emails, setEmails] = useState(null);

  const addEmail = async (email) => {
    try {
      // (url, option)
      const response = await fetch("/api", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const json = await response.json();

      if (json.result !== "success") {
        throw new Error(json.message);
      }
      setEmails([json.data, ...emails]);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchEmails = async (keyword) => {
    try {
      // (url, option)
      const response = await fetch(`/api?kw=${keyword ? keyword : ""}`, {
        method: "get",
        headers: {
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

  const deleteEmail = async (no) => {
    try {
      // (url, option)
      const response = await fetch(`/api?no=${no}`, {
        method: "delete",
        headers: {
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
      fetchEmails();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div id="App">
      <RegisterForm addEmail={addEmail} />
      <Searchbar fetchEmails={fetchEmails} />
      <Emaillist emails={emails} deleteEmail={deleteEmail} />
    </div>
  );
}

export default App;
