import React from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";
import Email from "./Email";

function App(props) {
  return (
    <div id="App">
      <RegisterForm />
      <Searchbar />
      <Emaillist />
      <Email />
    </div>
  );
}

export default App;
