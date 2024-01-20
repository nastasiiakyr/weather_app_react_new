import React from "react";

import "./ForecastDayCard.css";

export default function ForecastDayCard(props) {
  return (
    <div className="ForecastDayCard">
      <img src={props.image} alt="" width="48px" />
      <div className="temperature">
        <span className="max" id="temp_forecast_max">
          {props.temperatureMax}
        </span>{" "}
        /{" "}
        <span className="min" id="temp_forecast_min">
          {props.temperatureMin}
        </span>
      </div>
      <hr />
      <h3 className="day_name">{props.day}</h3>
    </div>
  );
}
