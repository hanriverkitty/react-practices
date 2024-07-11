import React from "react";
import "../assets/css/App.css";
import GroceryList from "./GroceryList";
function App(props) {
  const groceries = [
    { no: 1, name: "Egg", count: 10 },
    { no: 2, name: "Milk", count: 20 },
    { no: 3, name: "Bread", count: 30 },
  ];
  return (
    <div>
      <h1 className={"title"}>Grocery List</h1>
      <GroceryList groceries={groceries} />
    </div>
  );
}

export default App;
