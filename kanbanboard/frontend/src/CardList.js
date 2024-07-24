import React, { useState, useEffect } from "react";
import { Card_List } from "./assets/css/styles.css";
import Card from "./Card";
function CardList() {
  const [Cards, setCards] = useState([]);
  const fetchCards = async () => {
    try {
      // (url, option)
      const response = await fetch("api/card", {
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
      setCards(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  const toDos = Cards.filter((status) => status.status === "ToDo");
  const doing = Cards.filter((status) => status.status === "Doing");
  const done = Cards.filter((status) => status.status === "Done");

  useEffect(() => {
    fetchCards();
  }, []);

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
