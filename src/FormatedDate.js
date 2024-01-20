import React, { useState, useCallback, useEffect } from "react";
import { useInterval } from "react-use";
import axios from "axios";

export default function FormatedDate(props) {
  let [date, setDate] = useState({ loaded: false });

  const fetchData = useCallback(async () => {
    let apiKeyTime = "ESJVB6GUV4NN";
    let apiUrlTime = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKeyTime}&format=json&by=position&lat=${props.lat}&lng=${props.lon}`;
    axios.get(apiUrlTime).then(handleResponse);
  }, [props.lat, props.lon]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useInterval(() => {
    fetchData();
  }, 60000);

  function handleResponse(response) {
    // Getting access to city current UNIX time in API and performing it to UTC timezone
    let currentTimeUnix = new Date(response.data.timestamp * 1000);
    let currentTime = new Date(
      currentTimeUnix.toLocaleString("en-US", { timeZone: "UTC" })
    );
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    setDate({
      loaded: true,
      day: days[currentTime.getDay()],
      month: months[currentTime.getMonth()],
      date: currentTime.getDate(),
      hour: currentTime.getHours(),
      minute: currentTime.getMinutes(),
    });
  }

  if (date.loaded) {
    return (
      <div className="current_date">
        <h3>
          {date.day} <span className="divider">|</span> {date.month}{" "}
          {date.date < 10 ? "0" + date.date : date.date}{" "}
          <span className="divider">|</span>{" "}
          {date.hour === 0 || date.hour < 10 ? "0" + date.hour : date.hour}:
          {date.minute === 0 || date.minute < 10
            ? "0" + date.minute
            : date.minute}
        </h3>
      </div>
    );
  } else {
    return "";
  }
}
