import "./App.css";

function App() {
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
    <div className="stopwatch">
      <h1>STOP WATCH</h1>
      <div>
        <div className="display">
          <h2>{formatTime()}</h2>
        </div>

        <div>
          <button className="btn" onClick={startHandle}>
            Start
          </button>
          <button className="btn" onClick={stopHandle}>
            Stop
          </button>
          <button className="btn" onClick={resetHandle}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
