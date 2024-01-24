import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState("")


  const fetchData = useCallback(async () => {
    const apiKeyWeather = "8cd9be374c7c96c39a9fe73f4bf2f055";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKeyWeather}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, [props]);

  useEffect(() => {
    fetchData();
  }, [props, fetchData]);

  function handleResponse(response) {
    setForecast(response.data);
  }

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
