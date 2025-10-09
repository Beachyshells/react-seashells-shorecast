import "./DailyWeather.css";
import React, { useMemo } from "react";
import { DateTime } from "luxon";

export default function DailyWeather({ data, city, timezone, unit, setUnit }) {
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitConversion() {
    return Math.round((data.temperature.day * 9) / 5 + 32);
  }

  const formattedDate = useMemo(() => {
    const timezoneOffset = timezone;
    const nowInUTC = DateTime.utc();
    const localTime = nowInUTC.plus({ seconds: timezoneOffset });
    return localTime.toFormat("ccc, h:mm a");
  }, [timezone]);

  const temperature = Math.round(data.temperature.day);
  const humidity = data.temperature.humidity;
  const windMph = Math.round(data.wind.speed * 2.237);
  const iconUrl = data.condition.icon_url;
  const description = data.condition.description;
  const cityName = city;

  let displayTemperature;

  if (unit === "celsius") {
    displayTemperature = (
      <>
        <span className="temperature">{temperature}</span>
        <span className="units">
          °C |{""}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </>
    );
  } else {
    displayTemperature = (
      <>
        <span className="temperature">{fahrenheitConversion()}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </>
    );
  }

  return (
    <div className="DailyWeather">
      <div className="row align-items-end align-items-md-center">
        <div className="col-md-6 text-center text-md-start">
          <p className="city-name">{cityName}</p>
          <div className="date">{formattedDate}</div>
          <ul className="details">
            <li className="description"> {description} </li>
            <li className="humidity-wind mt-2">Humidity: {humidity}%</li>
            <li className="humidity-wind">Wind: {windMph} mph</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={iconUrl} alt={description} className="weather-icon" />
          <div className="temperature-container ">{displayTemperature}</div>
        </div>
      </div>
    </div>
  );
}
