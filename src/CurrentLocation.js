import { useState} from "react";
import axios from "axios";

export function CurrentLocation() {
  const [currentCity, setCurrentCity] = useState(null);

  async function getCurrentLocation() {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const apiKeyWeather = "8cd9be374c7c96c39a9fe73f4bf2f055";
      const apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}&units=metric`;

      await axios.get(apiUrlCurrent).then(function (response) {
        setCurrentCity(response.data.name);
      });
    } catch (error) {
      console.error("Error getting current location:", error);
    }
  }

    getCurrentLocation();

  return currentCity;
}
