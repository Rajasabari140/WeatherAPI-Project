function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2>{weather.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="icon"
      />

      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;