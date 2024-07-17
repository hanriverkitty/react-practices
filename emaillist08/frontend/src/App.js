import React from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";

function App(props) {
  return (
    <div id="App">
      <RegisterForm />
      <Searchbar />
      <Emaillist />
    </div>
  );
}

export default App;
