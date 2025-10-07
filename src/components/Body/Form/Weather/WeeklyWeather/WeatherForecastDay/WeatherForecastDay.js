import React from "react";

export default function WeatherForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return <div></div>;
}
