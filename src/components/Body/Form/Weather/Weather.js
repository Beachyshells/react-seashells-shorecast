import React from "react";
import DailyWeather from "./DailyWeather/DailyWeather";
import WeeklyWeather from "./WeeklyWeather/WeeklyWeather";

export default function Weather(props) {
  console.log(props.data);
  if (props.data.ready) {
    const fullWeatherData = props.data.data;
    return (
      <div>
        <DailyWeather
          data={fullWeatherData.daily[0]}
          city={fullWeatherData.city}
          timezone={fullWeatherData.timezone}
          unit={props.unit}
          setUnit={props.setUnit}
        />
        <WeeklyWeather forecast={fullWeatherData.daily} unit={props.unit} />{" "}
      </div>
    );
  } else {
    return null;
  }
}
