import "./DailyWeather.css";

export default function DailyWeather(props) {
  console.log(props.data);

  function formatDate() {
    let date = new Date(props.data.time * 1000);
    let options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString("en-US", options);
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
      <div className="row align-items-center">
        <div className="col-6">
          <p className="city-name">{cityName}</p>
          <div className="date">{formattedDate}</div>
          <ul className="details">
            <li>~ {description} ~</li>
            <li className="humidity-wind mt-2">Humidity: {humidity}%</li>
            <li className="humidity-wind">Wind: {wind} mph</li>
          </ul>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <img src={iconUrl} alt={description} className="weather-icon" />
          <div className="temperature-container">
            <span className="temperature">{temperature}</span>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
