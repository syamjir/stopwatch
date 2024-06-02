import "./App.css";


function App() {
  const startHandle = () => {};
  const stopHandle = () => {};
  return (
    <div className="container">
      <h1>STOP WATCH</h1>
      <div>
        <h2>00:00:00</h2>

        <div>
          <button onClick={startHandle}>Start</button>
          <button onClick={stopHandle}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default App;
