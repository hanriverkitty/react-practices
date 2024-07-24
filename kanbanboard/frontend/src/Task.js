import React, { useEffect, useState } from "react";
import * as styles from "./assets/css/styles.css";
function Task({ task, taskNo, deleteClick, cardNo, updateTask }) {
  return (
    <li className={styles._Task}>
      <input
        type="checkbox"
        checked={task.done === "Y"}
        onChange={() => {
          updateTask({
            no: taskNo,
            cardNo: cardNo,
            done: task.done === "Y" ? "N" : "Y",
            naem: task.name,
          });
        }}
      />
      &ensp;{task.name}&ensp;
      <a
        href=""
        className={styles.Task_Remove}
        onClick={(e) => {
          e.preventDefault();
          deleteClick(cardNo, taskNo);
        }}
      ></a>
    </li>
  );
}
export default Task;
