import React, { useState, useEffect } from "react";
import axios from "axios";

import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import SwitchTemperature from "./SwitchTemperature";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [curWeatherData, setCurWeatherData] = useState({ loaded: false });

  useEffect(() => {
    let apiKeyWeather = "8cd9be374c7c96c39a9fe73f4bf2f055";
    let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKeyWeather}&units=metric`;

    axios.get(apiUrlCity).then(handleResponse);
  }, [props.city]);

  function handleResponse(response) {
    setCurWeatherData({
      loaded: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      wind: response.data.wind.speed * 3.6,
    });
  }

  function handleBackground(newBackground) {
    props.bg(newBackground);
  }

  if (curWeatherData.loaded) {
    return (
      <div className="CurrentWeather">
        {/* Current city and date */}
        <div className="current_city_date">
          <h1 className="current_city">{curWeatherData.city}</h1>

          <FormatedDate lat={curWeatherData.lat} lon={curWeatherData.lon} />
        </div>

        {/* Current temperature and condition */}
        <div className="current_temperature">
          <div className="weather_type">
            <WeatherIcon
              icon={curWeatherData.icon}
              condition={curWeatherData.condition}
              bg={handleBackground}
            />
            <div className="weather_type_text">
              <h3>
                Sky:
                <span id="weather_condition">{curWeatherData.condition}</span>
              </h3>
              <h3>
                Wind:
                <span id="wind_speed">
                  {Math.round(curWeatherData.wind * 10) / 10}
                </span>
                km/h
              </h3>
            </div>
          </div>

          <div className="vertical_line">|</div>

          <SwitchTemperature celsius={curWeatherData.temperature} />
        </div>
      </div>
    );
  } else {
    return "";
  }
}
