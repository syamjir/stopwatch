import React, {useState,useEffect} from "react";
import "./Stopwatch.css"

export default function Stopwatch() {
    const startHandle = () => {

    };
    const stopHandle = () => {
  
    };
    const resetHandle = () => {
      
    };
  
    const formatTime=()=>{
        return "00:00:00"
    };

  return (
    <div className="container">
      <h1 >STOP WATCH</h1>
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
  )
}
