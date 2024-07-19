import React from "react";
import TaskList from "./TaskList";
import * as cardStyle from "./assets/css/styles.css";
function Card({ card }) {
  console.log(card);
  return (
    <div className={cardStyle._Card}>
      <div className={`${cardStyle.Card_Title} ${cardStyle.Card_Title_Open}`}>
        {card.title}
      </div>
      <div className="Card_Details">
        {card.description}
        <TaskList tasks={card.tasks} key={card.no} />
      </div>
    </div>
  );
}

export default Card;
