import React from "react";

const TrafficLight = ({ activeLight }) => {
  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === "red" ? "active" : ""}`}></div>
      <div className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}></div>
      <div className={`light green ${activeLight === "green" ? "active" : ""}`}></div>
    </div>
  );
};

export default TrafficLight;
