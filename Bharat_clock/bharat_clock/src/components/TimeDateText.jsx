// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function TimeDateText() {
  const [currentTime, setCurrentTime] = useState(new Date()); // State to track time

  // Days of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update state with new time
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="TimeDateText">
      <br />
      This is the current:
      <br />
      <br />
      <div className="timeAndDate">
        <span className="time-text">Time :</span>{" "}
        {currentTime.toLocaleTimeString()} <br />
        <span className="date-text">Date :</span> {currentTime.getDate()},{" "}
        {days[currentTime.getDay()]}, {currentTime.getFullYear()}.
      </div>
    </div>
  );
}

export default TimeDateText;
