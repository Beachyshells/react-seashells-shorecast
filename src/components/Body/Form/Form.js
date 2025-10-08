import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Weather from "./Weather/Weather";
import SearchField from "./SearchField/SearchField";

export default function Form() {
  const [city, setCity] = useState("");
  const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handleGeoResponse(response) {
    const { lat, lon } = response.data.coord;
    const forecastApiKey = "b9aaeaaf97004f2a03afob830bt63baf";
    const forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${forecastApiKey}&units=metric`;
    axios.get(forecastApiUrl).then(handleResponse);
  }

  function apiSearch() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleGeoResponse)
      .catch(function (error) {
        console.error("DEBUG: API call failed. Here is the error:", error);
      });
  }
  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
    apiSearch();
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      data: response.data,
    });
  }

  return (
    <div className="Form">
      <form onSubmit={handleSearch}>
        <SearchField city={city} onCityChange={handleCityChange} />
        <p className="loading">Searching for weather in {city}</p>
        <Weather data={weatherData} />
      </form>
    </div>
  );
}
