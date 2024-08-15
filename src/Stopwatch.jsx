import React, { useState, useEffect, useRef } from "react";
import "./stopwatch.css";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false); // Tracks if the stopwatch is running
  const [isCountdown, setIsCountdown] = useState(false); // Toggles between countdown and count-up mode
  const [time, setTime] = useState(0); // Tracks the current time in milliseconds
  const [isCountDownFormOpen, setIsCountDownFormOpen] = useState(false); // Tracks if the countdown input form is open
  const [inputTime, setInputTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  }); // Stores user input for countdown time
  const intervalIdRef = useRef(null); // Ref to store the interval ID for clearing

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (isCountdown) {
            return Math.max(prevTime - 10, 0); // Countdown to 0
          } else {
            return prevTime + 10; // Count up from 0
          }
        });
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current); // Cleanup interval
    };
  }, [isRunning, isCountdown]);

  function startHandle() {
    setIsRunning(true);
  }

  function stopHandle() {
    setIsRunning(false);
  }

  function resetHandle() {
    setIsRunning(false);
    setTime(0);
  }

  function setTimeHandle() {
    const totalMilliseconds =
      inputTime.hours * 60 * 60 * 1000 +
      inputTime.minutes * 60 * 1000 +
      inputTime.seconds * 1000;
    setTime(totalMilliseconds);
    setIsCountdown(true);
    setIsCountDownFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputTime((prev) => ({
      ...prev,
      [name]: value === "" ? 0 : parseInt(value, 10),
    }));
  }

  function toggleMode() {
    setIsRunning(false);
    setTime(0); // Reset time when toggling mode
    setIsCountdown((count) => !count); // Switch modes

    if (isCountdown) {
      setIsCountDownFormOpen(false);
    } else {
      setIsCountDownFormOpen(true);
      setTime(0);
      setInputTime({
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  }

  function formatTime() {
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    let milliseconds = Math.floor((time % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="container">
      <h1>STOPWATCH</h1>
      <div className="stopwatch">
        <div className="display">
          <p>{formatTime()}</p>
        </div>
        <div>
          <div className="Btns">
            {isCountDownFormOpen ? (
              <></>
            ) : (
              <>
                <button className="startBtn" onClick={startHandle}>
                  Start
                </button>
                <button className="stopBtn" onClick={stopHandle}>
                  Stop
                </button>
                <button className="resetBtn" onClick={resetHandle}>
                  Reset
                </button>
              </>
            )}

            {isCountDownFormOpen && (
              <div className="set-time">
                <h2>Set Countdown Time</h2>
                <label htmlFor="hours">Hour</label>
                <input
                  type="number"
                  name="hours"
                  value={inputTime.hours}
                  onChange={handleInputChange}
                  placeholder="HH"
                />
                <label htmlFor="minutes">Minute</label>
                <input
                  type="number"
                  name="minutes"
                  value={inputTime.minutes}
                  onChange={handleInputChange}
                  placeholder="MM"
                />
                <label htmlFor="seconds">Second</label>
                <input
                  type="number"
                  name="seconds"
                  value={inputTime.seconds}
                  onChange={handleInputChange}
                  placeholder="SS"
                />
                <button className="setTimeBtn" onClick={setTimeHandle}>
                  Set Time
                </button>
              </div>
            )}
          </div>
          <button className="toggleModeBtn" onClick={toggleMode}>
            {isCountdown ? "Switch to Count Up" : "Switch to Countdown"}
          </button>
        </div>
      </div>
    </div>
  );
}
