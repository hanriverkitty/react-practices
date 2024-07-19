import React from "react";
import * as styles from "./assets/css/styles.css";
function Task({ task, taskNo }) {
  //   console.log(taskNo);
  return (
    <li className={styles._Task}>
      <input type="checkbox" checked={task.done} onChange={() => {}} />
      &ensp;{task.name}&ensp;
      <a href="#" className={styles.Task_Remove}></a>
    </li>
  );
}
export default Task;
