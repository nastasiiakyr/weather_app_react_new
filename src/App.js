import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { CurrentLocation } from "./CurrentLocation";
import Search from "./Search";
import FastSearch from "./FastSearch";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  const currentCity = CurrentLocation();
  const [city, setCity] = useState("Odesa");
  const [background, setBackground] = useState("./img/bg_sample.jpg");
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

  useEffect(() => {
    currentCity ? setCity(currentCity) : setCity("Odesa");
  }, [currentCity]);

  function handleNewCity(newCity) {
    setCity(newCity);
  }

  function handleBackground(newBackground) {
    setBackground(newBackground);
  }

  function handleCoordinates(lat, lon) {
    setCoordinates({ lat, lon });
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      {/* Weater card area */}

      <div className="container">
        {/* Current weather */}
        <div
          className="currentWeather"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="overlay" />
          {/* Search */}
          <Search searchNewCity={handleNewCity} />
          <FastSearch fastSearchCity={handleNewCity} />
          {/* Current weather in the chosen city */}
          <CurrentWeather
            city={city}
            bg={handleBackground}
            coordinates={handleCoordinates}
          />
        </div>

        {/* Weather forecast */}
        <WeatherForecast lat={coordinates.lat} lon={coordinates.lon} />

        {/* Link to the code */}
        <Footer />
      </div>
    </div>
  );
}
