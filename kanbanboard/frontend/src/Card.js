import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import * as cardStyle from "./assets/css/styles.css";
function Card({ card }) {
  const [visible, setVisible] = useState(true);
  const [taskList, setTaskList] = useState([]);

  const fetchTaskList = async (no) => {
    try {
      // (url, option)
      const response = await fetch(`api/task?no=${no}`, {
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
      setTaskList(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteClick = async (cardNo, no) => {
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
      fetchTaskList(cardNo);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async (task) => {
    try {
      // (url, option)
      const response = await fetch("/api/insert", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const json = await response.json();

      if (json.result !== "success") {
        throw new Error(json.message);
      }
      setTaskList([json.data, ...taskList]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (task) => {
    try {
      // (url, option)
      const response = await fetch("/api/update", {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const json = await response.json();

      if (json.result !== "success") {
        throw new Error(json.message);
      }
      fetchTaskList(task.cardNo);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTaskList(card.no);
  }, []);

  // console.log(card);
  return (
    <div className={cardStyle._Card}>
      <div
        className={[
          cardStyle.Card_Title,
          visible ? cardStyle.Card_Title_Open : "",
        ].join(" ")}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {card.title}
      </div>
      <div className="Card_Details">
        {card.description}
        <TaskList
          tasks={taskList}
          key={card.no}
          cardNo={card.no}
          visible={visible}
          deleteClick={deleteClick}
          updateTask={updateTask}
          addTask={addTask}
        />
      </div>
    </div>
  );
}

export default Card;
