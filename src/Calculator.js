import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (value === "AC") {
      setDisplay("0");
    } else if (value === "=") {
      try {
        setDisplay(String(eval(display)));
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="display">{display}</div>

      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*",
          "1", "2", "3", "-", "AC", "0", "=", "+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;