import { Redirect } from "react-router";
import "./Weather.css";

export default function Weather(props) {
  const weather = props.location.state;

  if (!weather) {
    return <Redirect to="/" />;
  }

  return (
    <div className="weather">
      <h1 className="weather__city">
        {weather.name}{" "}
        <span className="weather__code">{weather.sys.country}</span>
      </h1>

      <div className="weather__desc">
        <img
          className="weather__icon"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <h2 className="weather__name">{weather.weather[0].description}</h2>
        <p className="weather__temp">
          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </p>
      </div>

      <div className="weather__details">
        <p className="weather__title">Feels like</p>
        <p className="weather__subtitle">
          {weather.main.feels_like} <sup>&deg;C</sup>
        </p>
        <p className="weather__title">Wind Speed</p>
        <p className="weather__subtitle">{weather.wind.speed} kph</p>
      </div>
    </div>
  );
}
