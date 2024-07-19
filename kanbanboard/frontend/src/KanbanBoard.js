import React from "react";
import CardList from "./CardList";
import { Kanban_Board } from "./assets/css/styles.css";
import data from "./assets/json/data";
function KanbanBoard() {
  //   console.log(data);
  return (
    <div className={Kanban_Board}>
      <CardList Cards={data} />
    </div>
  );
}

export default KanbanBoard;
