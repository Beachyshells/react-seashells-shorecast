import React from "react";

export default function WeatherForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  const maxTemperature = Math.round(props.data.temperature.maximum);
  const minTemperature = Math.round(props.data.temperature.minimum);
  const iconUrl = props.data.condition.icon_url;
  const description = props.data.condition.description;
  const day = formatDay();

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day}</div>
      <img src={iconUrl} alt={description} className="forecast-icon" />
      <div className="temperatures">
        <span className="temperature-max">{maxTemperature}°</span> |
        <span className="temperature-min">{minTemperature}°</span>
      </div>
    </div>
  );
}
