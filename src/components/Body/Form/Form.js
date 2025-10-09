import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Weather from "./Weather/Weather";
import SearchField from "./SearchField/SearchField";

export default function Form() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("celsius");
  const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  const [weatherData, setWeatherData] = useState({ ready: false });
  /* */
  function handleCityChange(event) {
    setCity(event.target.value);
    if (error) {
      setError(null);
    }
  }
  /**/
  function handleGeoResponse(response) {
    const { lat, lon } = response.data.coord;
    const timezone = response.data.timezone;
    const forecastApiKey = "b9aaeaaf97004f2a03afob830bt63baf";
    const forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${forecastApiKey}&units=metric`;
    axios.get(forecastApiUrl).then(function (forecastResponse) {
      handleResponse(forecastResponse, timezone);
    });
  }
  /**/
  function apiSearch() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleGeoResponse)
      .catch(function (error) {
        setError(
          `Our charts don't show a coast named ${city}. Please try another location.`
        );
      });
  }
  /**/
  function handleSearch(event) {
    event.preventDefault();
    if (city.trim()) {
      apiSearch();
    } else {
      alert("To find the shorecast, I need a shore! Please tell me a city.");
    }
  }

  function handleResponse(response, timezone) {
    setError(null);
    console.log("DEBUG: Final SheCodes API Response:", response.data);
    response.data.timezone = timezone;
    setWeatherData({
      ready: true,
      data: response.data,
    });
  }
  return (
    <div className="Form">
      <form onSubmit={handleSearch}>
        <SearchField city={city} onCityChange={handleCityChange} />
      </form>

      {(() => {
        if (error) {
          return <div className="error-message">{error}</div>;
        } else if (weatherData.ready) {
          return <Weather data={weatherData} unit={unit} setUnit={setUnit} />;
        } else {
          return (
            <div className="message-container">
              {city ? (
                <p className="loading">Consulting the Seagulls in {city}...</p>
              ) : (
                <p className="loading">
                  Cast a line for your city's shorecast... {city}
                </p>
              )}
            </div>
          );
        }
      })()}
    </div>
  );
}
