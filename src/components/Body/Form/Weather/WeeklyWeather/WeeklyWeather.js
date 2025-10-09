import WeatherForecastDay from "./WeatherForecastDay/WeatherForecastDay";

export default function WeeklyWeather(props) {
  if (!props.forecast) {
    return null;
  }
  return (
    <div className="WeeklyWeather">
      <div className="row row-cols-1 row-cols-lg-5 g-3">
        {props.forecast.slice(1, 6).map(function (day, index) {
          return (
            <div className="col" key={index}>
              <WeatherForecastDay data={day} unit={props.unit} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
