import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxFahrenheit() {
    return Math.round((props.data.temperature.maximum * 9) / 5 + 32);
  }

  function minFahrenheit() {
    return Math.round((props.data.temperature.minimum * 9) / 5 + 32);
  }
  const maxFahrenheitTemperature = Math.round(
    (props.data.temperature.maximum * 9) / 5 + 32
  );
  const minFahrenheitTemperature = Math.round(
    (props.data.temperature.minimum * 9) / 5 + 32
  );
  const maxTemperature = Math.round(props.data.temperature.maximum);
  const minTemperature = Math.round(props.data.temperature.minimum);
  const iconUrl = props.data.condition.icon_url;
  const description = props.data.condition.description;
  const day = formatDay();
  if (props.unit === "celsius") {
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
  } else {
    return (
      <div className="WeatherForecastDay">
        <div className="day">{day}</div>
        <img src={iconUrl} alt={description} className="forecast-icon" />
        <div className="temperatures">
          <span className="temperature-max">{maxFahrenheitTemperature}°</span> |
          <span className="temperature-min">{minFahrenheitTemperature}°</span>
        </div>
      </div>
    );
  }
}
