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
    }, 0.01); // Уменьшение интервала для ускорения счетчика

    return () => clearInterval(interval);
  }, []);

  const rotationDegree = (count / 841) * 360;
  const radius = 60; // Радиус внешнего круга (половина от 120px)
  const radians = ((rotationDegree - 90) * Math.PI) / 180; // Вычитание 90 градусов для старта сверху
  const dotX = radius + radius * Math.cos(radians) - 4; // Вычитание половины ширины точки для центрирования
  const dotY = radius + radius * Math.sin(radians) - 4; // Вычитание половины высоты точки для центрирования

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
