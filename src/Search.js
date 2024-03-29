import React, { useState } from "react";

import "./Search.css";

export default function Search({ searchNewCity }) {
  let [city, setCity] = useState("Odesa");

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    searchNewCity(city);
    setCity("");
    event.target.reset();
  }

  return (
    <form className="Search" onSubmit={handleSearch}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        alt="Search"
        className="icon_search"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.8695 1C8.5545 1 10.7385 3.184 10.7385 5.869C10.7385 7.13577 10.2524 8.29114 9.45682 9.15825L11.0222 10.7204C11.1687 10.8668 11.1692 11.1039 11.0227 11.2503C10.9497 11.3244 10.8532 11.3609 10.7572 11.3609C10.6617 11.3609 10.5657 11.3244 10.4922 11.2514L8.90793 9.6715C8.07454 10.3389 7.01784 10.7385 5.8695 10.7385C3.1845 10.7385 1 8.554 1 5.869C1 3.184 3.1845 1 5.8695 1ZM5.8695 1.75C3.598 1.75 1.75 3.5975 1.75 5.869C1.75 8.1405 3.598 9.9885 5.8695 9.9885C8.1405 9.9885 9.9885 8.1405 9.9885 5.869C9.9885 3.5975 8.1405 1.75 5.8695 1.75Z"
          fill="#4F4F4F"
        />
      </svg>
      <input
        className="search_input"
        type="search"
        name="search_city"
        placeholder="Search"
        autoComplete="off"
        onChange={handleCityChange}
      />
    </form>
  );
}
