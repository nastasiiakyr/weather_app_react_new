import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);

  const fetchData = useCallback(async () => {
    const apiKeyWeather = "8cd9be374c7c96c39a9fe73f4bf2f055";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKeyWeather}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, [props]);

  useEffect(() => {
    fetchData();
  }, [props, fetchData]);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }
  if (forecast) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return (
      <div className="WeatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="forecastDayCard" key={index}>
                <WeatherIcon
                  icon={dailyForecast.weather[0].icon}
                  condition={dailyForecast.weather[0].main}
                />
                <div className="temperature">
                  <span className="max">{Math.round(dailyForecast.temp.max)}°</span> /{" "}
                  <span className="min">{Math.round(dailyForecast.temp.min)}°</span>
                </div>
                <hr />
                <h3 className="day_name">{days[(new Date(dailyForecast.dt * 1000)).getDay()]}</h3>
              </div>
            );
          }

          return null;
        })}
      </div>
    );
  } else {return "";}
}
