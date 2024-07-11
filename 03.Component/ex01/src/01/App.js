import React from "react";
import "../assets/css/App.css";
import GroceryList from "./GroceryList";
function App(props) {
  return (
    <div>
      <h1 className={"title"}>Grocery List</h1>
      <GroceryList />
    </div>
  );
}

export default App;
