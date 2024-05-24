import React, { useState, useEffect } from "react";
import "../../../../Assets/Styles/style.css";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 841) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 1); // Change the number to speed up or slow down the count

    return () => clearInterval(interval);
  }, []);

  const rotationDegree = (count / 841) * 360;
  const radius = 60; // Radius of the outer circle (half of 120px)
  const radians = ((rotationDegree - 90) * Math.PI) / 180; // Subtract 90 degrees to start from top
  const dotX = radius + radius * Math.cos(radians) - 4; // Subtract half of dot's width to center it
  const dotY = radius + radius * Math.sin(radians) - 4; // Subtract half of dot's height to center it

  return (
    <div className="button-container">
      <div className="outer-circle">
        <div
          className="dot"
          style={{
            top: `${dotY}px`,
            left: `${dotX}px`,
          }}
        ></div>
        <div className="inner-circle">
          <div className="text">{count}MW</div>
        </div>
      </div>
    </div>
  );
};

export default CounterButton;
