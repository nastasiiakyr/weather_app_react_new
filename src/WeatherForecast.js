import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
      <div className="WeatherForecast">
        <div className="forecastDayCard">
          <WeatherIcon icon="01d" condition="Clear" />
          <div className="temperature">
            <span className="max">12</span> / <span className="min">4</span>
          </div>
          <hr />
          <h3 className="day_name">Saturday</h3>
        </div>
      </div>
  );
}
