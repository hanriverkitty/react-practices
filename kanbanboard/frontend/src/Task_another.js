import React, { useEffect, useState } from "react";
import * as styles from "./assets/css/styles.css";
function Task({ task, taskNo }) {
  const deleteClick = async (no) => {
    try {
      // (url, option)
      const response = await fetch(`/api/delete?no=${no}`, {
        method: "delete",
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
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(taskNo);
  const [oneTask, setTask] = useState([]);

  useEffect(() => {
    setTask(task);
  }, []);
  return oneTask.length !== 0 ? (
    <li className={styles._Task}>
      <input type="checkbox" checked={oneTask.done} onChange={() => {}} />
      &ensp;{oneTask.name}&ensp;
      <a
        href=""
        className={styles.Task_Remove}
        onClick={(e) => {
          e.preventDefault();
          deleteClick(taskNo);
          setTask([]);
        }}
      ></a>
    </li>
  ) : (
    <></>
  );
}
export default Task;
