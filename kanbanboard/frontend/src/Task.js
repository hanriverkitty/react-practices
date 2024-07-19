import React from "react";
import * as styles from "./assets/css/styles.css";
function Task({ task }) {
  //   console.log(task);
  return (
    <li className={styles._Task}>
      <input type="checkbox" checked={task.done} />
      &ensp;{task.name}&ensp;
      <a href="#" className={styles.Task_Remove}></a>
    </li>
  );
}
export default Task;
