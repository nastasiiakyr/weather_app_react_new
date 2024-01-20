import React from "react";

import { CurrentLocation } from "./CurrentLocation";
import "./FastSearch.css";

export default function FastSearch({ fastSearchCity }) {
  let fastSearchCities = [
    "Current location",
    "Kyiv",
    "Odesa",
    "Kharkiv",
    "Lviv",
    "Dnipro",
  ];

  const currentCity = CurrentLocation();

  function getCurrentLocation() {
    fastSearchCity(currentCity);
  }

  return (
    <div className="FastSearch">
      {fastSearchCities.map((city, index) => {
        return (
          <a
            key={index}
            href="/"
            onClick={(event) => {
              event.preventDefault();
              city !== "Current location"
                ? fastSearchCity(city)
                : getCurrentLocation();
            }}
            className="city"
          >
            {city}
          </a>
        );
      })}
    </div>
  );
}
