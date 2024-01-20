import React, { useState } from "react";

export default function SwitchTemperature(props) {
  let [system, setSystem] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setSystem("fahrenheit");
  }

  function showCeslius(event) {
    event.preventDefault();
    setSystem("celsius");
  }

  if (system === "celsius") {
    return (
      <div className="temperature">
        <h2 className="cur_temp_number">{Math.round(props.celsius)}</h2>
        <p className="degrees">
          <span className="celsius focused">°C</span>
          <a href="/" className="fahrenheit active" onClick={showFahrenheit}>
            °F
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <h2 className="cur_temp_number">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </h2>
        <p className="degrees">
          <a href="/" className="celsius active" onClick={showCeslius}>
            °C
          </a>
          <span className="fahrenheit focused">°F</span>
        </p>
      </div>
    );
  }
}
