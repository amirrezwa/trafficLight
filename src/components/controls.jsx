import React from "react";

const Controls = ({
  isRunning,
  isManual,
  toggleRunning,
  toggleManual,
  goToNextLight,
  goToPreviousLight,
}) => {
  return (
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
  );
};

export default Controls;
