import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./ForecastDayCard.css";

export default function ForecastDayCard(props) {
  return (
    <div className="ForecastDayCard">
    <WeatherIcon icon="01d" condition="Clear"/>
      <div className="temperature">
        <span className="max">12</span> /{" "}
        <span className="min">4</span>
      </div>
      <hr />
      <h3 className="day_name">Saturday</h3>
    </div>
  );
}
