import React from "react";

export default function Weather(props) {
  console.log(props.data);
  if (props.data.ready) {
    return (
      <div>
        <DailyWeather />
        <WeeklyWeather />{" "}
      </div>
    );
  } else {
    return null;
  }
}
