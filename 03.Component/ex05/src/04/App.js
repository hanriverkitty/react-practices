import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
  const getCurrentTime = function () {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [tick, setTick] = useState(0);

  useEffect(
    () => {
      const intervalid = setInterval(() => {
        setCurrentTime(getCurrentTime());
        //   setTick(tick + 1);
        setTick((x) => x + 1);
      }, 1000);

      return () => {
        clearInterval(intervalid);
      };
    } /*[tick]*/
  );
  return (
    <>
      <Clock
        title={`ex05: Clock Component II: ${tick}`}
        hours={currentTime.hours}
        minutes={currentTime.minutes}
        seconds={currentTime.seconds}
      />
    </>
  );
}
