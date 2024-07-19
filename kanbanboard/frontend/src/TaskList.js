import React from "react";
import Task from "./Task";
import * as styles from "./assets/css/styles.css";
function TaskList({ tasks }) {
  return (
    <div className={styles.Task_List}>
      <ul>
        {tasks.map((e) => {
          return <Task task={e} />;
        })}
      </ul>
      <input
        className={styles.Input_Add_Task}
        type="text"
        placeholder="태스크 추가"
      ></input>
    </div>
  );
}
export default TaskList;
