import "./DailyWeather.css";
import { DateTime } from "luxon";

export default function DailyWeather(props) {
  console.log("DailyWeather props:", props);

  function formatDate() {
    const timezoneOffset = props.timezone;
    const nowInUTC = DateTime.utc();
    const localTime = nowInUTC.plus({ seconds: timezoneOffset });
    return localTime.toFormat("ccc, h:mm a");
  }
  const temperature = Math.round(props.data.temperature.day);
  const humidity = props.data.temperature.humidity;
  const wind = Math.round(props.data.wind.speed);
  const iconUrl = props.data.condition.icon_url;
  const description = props.data.condition.description;
  const cityName = props.city;
  const formattedDate = formatDate();
  return (
    <div className="DailyWeather">
      <div className="row align-items-end align-items-md-center">
        <div className="col-md-6 text-center text-md-start">
          <p className="city-name">{cityName}</p>
          <div className="date">{formattedDate}</div>
          <ul className="details">
            <li className="description"> {description} </li>
            <li className="humidity-wind mt-2">Humidity: {humidity}%</li>
            <li className="humidity-wind">Wind: {wind} mph</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={iconUrl} alt={description} className="weather-icon" />
          <div className="temperature-container ">
            <span className="temperature">{temperature}</span>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
