import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [activeLight, setActiveLight] = useState("red");
  const [isRunning, setIsRunning] = useState(true);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  const getNextLight = (prev) => {
    if (prev === "red") return "yellow";
    if (prev === "yellow") return "green";
    return "red";
  };

  const getPreviousLight = (current) => {
    if (current === "red") return "green";
    if (current === "green") return "yellow";
    return "red";
  };

  useEffect(() => {
    if (!isManual && isRunning) {
      intervalRef.current = setInterval(() => {
        setActiveLight((prev) => getNextLight(prev));
      }, 2000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isManual]);

  const toggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const toggleManual = () => {
    setIsManual((prev) => !prev);
    setIsRunning(false); // وقتی می‌ریم به manual، حالت auto قطع شه
  };

  const goToNextLight = () => {
    setActiveLight((prev) => getNextLight(prev));
  };

  const goToPreviousLight = () => {
    setActiveLight((prev) => getPreviousLight(prev));
  };

  return (
    <div className="container">
      <div className="traffic-light">
        <div className={`light red ${activeLight === "red" ? "active" : ""}`}></div>
        <div className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}></div>
        <div className={`light green ${activeLight === "green" ? "active" : ""}`}></div>
      </div>

      <div className="controls">
        <button onClick={toggleRunning} disabled={isManual}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={toggleManual}>
          {isManual ? "Switch to Auto" : "Switch to Manual"}
        </button>

        {isManual && (
          <>
            <button onClick={goToPreviousLight}>Previous Light</button>
            <button onClick={goToNextLight}>Next Light</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
