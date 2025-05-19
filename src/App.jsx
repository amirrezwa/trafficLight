import React, { useEffect, useState, useRef } from "react";
import TrafficLight from "./components/trafficLitgh";
import Controls from "./components/controls";

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
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isManual]);

  const toggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const toggleManual = () => {
    setIsManual((prev) => !prev);
    setIsRunning(false);
  };

  const goToNextLight = () => {
    setActiveLight((prev) => getNextLight(prev));
  };

  const goToPreviousLight = () => {
    setActiveLight((prev) => getPreviousLight(prev));
  };

  return (
    <div className="container">
      <TrafficLight activeLight={activeLight} />
      <Controls
        isRunning={isRunning}
        isManual={isManual}
        toggleRunning={toggleRunning}
        toggleManual={toggleManual}
        goToNextLight={goToNextLight}
        goToPreviousLight={goToPreviousLight}
      />
    </div>
  );
}

export default App;
