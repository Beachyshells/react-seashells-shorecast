import React from "react";
import DailyWeather from "./DailyWeather/DailyWeather";
import WeeklyWeather from "./WeeklyWeather/WeeklyWeather";

export default function Weather({ data, unit, setUnit }) {
  console.log(data);
  if (data.ready) {
    const fullWeatherData = data.data;
    return (
      <div>
        <DailyWeather
          data={fullWeatherData.daily[0]}
          city={fullWeatherData.city}
          timezone={fullWeatherData.timezone}
          unit={unit}
          setUnit={setUnit}
        />
        <WeeklyWeather forecast={fullWeatherData.daily} unit={unit} />{" "}
      </div>
    );
  } else {
    return null;
  }
}
