import React, { useCallback, useEffect } from "react";

export default function WeatherIcon(props) {
  const weatherIcons = {
    "01d": {
      icon: "./img/icon-sunny-day.png",
      background: "./img/bg-sunny.jpg",
    },
    "01n": {
      icon: "./img/icon-clear-night.png",
      background: "./img/bg-clear-night.jpg",
    },

    "02d": {
      icon: "./img/icon-cloud-day.png",
      background: "./img/bg_clouds.jpg",
    },
    "02n": {
      icon: "./img/icon-cloud-night.png",
      background: "./img/bg_cloud_night.jpg",
    },

    "03d": {
      icon: "./img/icon-cloud-day.png",
      background: "./img/bg_clouds.jpg",
    },
    "03n": {
      icon: "./img/icon-cloud-night.png",
      background: "./img/bg_cloud_night.jpg",
    },

    "04d": {
      icon: "./img/icon-cloud-day.png",
      background: "./img/bg_clouds.jpg",
    },
    "04n": {
      icon: "./img/icon-cloud-night.png",
      background: "./img/bg_cloud_night.jpg",
    },

    "09d": {
      icon: "./img/icon-rain.png",
      background: "./img/bg-rain.jpg",
    },
    "09n": {
      icon: "./img/icon-rain.png",
      background: "./img/bg-rain-night.jpg",
    },

    "10d": {
      icon: "./img/icon-rain.png",
      background: "./img/bg-rain.jpg",
    },
    "10n": {
      icon: "./img/icon-rain.png",
      background: "./img/bg-rain-night.jpg",
    },

    "11d": {
      icon: "./img/icon-thunderstorm.png",
      background: "./img/bg_thunderstorm_day.jpg",
    },
    "11n": {
      icon: "./img/icon-thunderstorm.png",
      background: "./img/bg_thunderstorm_night.jpg",
    },

    "13d": {
      icon: "./img/icon-snow.png",
      background: "./img/bg-snow-day.jpg",
    },
    "13n": {
      icon: "./img/icon-snow.png",
      background: "./img/bg-snow-night.jpg",
    },

    "50d": {
      icon: "./img/icon-haze.png",
      background: "./img/bg-haze-day.jpg",
    },
    "50n": {
      icon: "./img/icon-haze.png",
      background: "./img/bg-haze-night.jpg",
    },

    "00": {
      icon: "./img/icon-sample.png",
      background: "./img/bg_sample.jpg",
    },
  };

  const handleBackground = useCallback(() => {
    if (props.bg && weatherIcons[props.icon]) {
      props.bg(weatherIcons[props.icon].background);
    }
    // eslint-disable-next-line
  }, [props.icon]);

  useEffect(() => {
    handleBackground();
  }, [handleBackground]);

  return (
    <img
      src={
        weatherIcons[props.icon]
          ? weatherIcons[props.icon].icon
          : weatherIcons["00"].icon
      }
      alt={props.condition}
      className="weather_type_icon"
    />
  );
}
