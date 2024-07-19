import React from "react";
import Card from "./Card";
import { Card_List } from "./assets/css/styles.css";
function CardList({ Cards }) {
  const toDos = Cards.filter((status) => status.status === "ToDo");
  const doing = Cards.filter((status) => status.status === "Doing");
  const done = Cards.filter((status) => status.status === "Done");
  return (
    <div>
      <div className={Card_List}>
        <h1>To Do</h1>
        {toDos.map((e) => {
          return <Card card={e} key={e.no} cardNo={e.no} />;
        })}
      </div>
      <div className={Card_List}>
        <h1>Doing</h1>
        {doing.map((e) => {
          return <Card card={e} key={e.no} cardNo={e.no} />;
        })}
      </div>
      <div className={Card_List}>
        <h1>Done</h1>
        {done.map((e) => {
          return <Card card={e} key={e.no} cardNo={e.no} />;
        })}
      </div>
    </div>
  );
}

export default CardList;
