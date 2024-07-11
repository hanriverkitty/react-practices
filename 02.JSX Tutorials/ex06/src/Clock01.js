import React from "react";

function Clock01(props) {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let sec = now.getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  return (
    <div>
      {hour}:{minute}:{sec}
    </div>
  );
}

export default Clock01;
