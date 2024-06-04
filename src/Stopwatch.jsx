import React, { useState, useEffect, useRef } from "react";
import "./Stopwatch.css";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function startHandle() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stopHandle() {
    setIsRunning(false);
  }

  function resetHandle() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="container">
      <h1>STOP WATCH</h1>
      <div className="stopwatch">
        <div className="display">
          <p>{formatTime()}</p>
        </div>

        <div className="Btns">
          <button className="startBtn" onClick={startHandle}>
            Start
          </button>
          <button className="stopBtn" onClick={stopHandle}>
            Stop
          </button>
          <button className="restatBtn" onClick={resetHandle}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
