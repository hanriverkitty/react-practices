import React, { useEffect, useState } from "react";
import Task from "./Task";
import * as styles from "./assets/css/styles.css";
function TaskList({
  tasks,
  visible,
  deleteClick,
  cardNo,
  updateTask,
  addTask,
}) {
  return (
    <div
      className={styles.Task_List}
      style={{ display: visible ? "block" : "none" }}
    >
      <ul>
        {tasks.map((e) => {
          return (
            <Task
              task={e}
              key={e.no}
              taskNo={e.no}
              deleteClick={deleteClick}
              cardNo={cardNo}
              updateTask={updateTask}
            />
          );
        })}
      </ul>
      <input
        className={styles.Input_Add_Task}
        type="text"
        placeholder="태스크 추가"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // console.log("enter pressed");
            addTask({
              name: e.target.value,
              done: "N",
              cardNo: cardNo,
            });
            e.target.value = "";
          }
        }}
      ></input>
    </div>
  );
}
export default TaskList;
