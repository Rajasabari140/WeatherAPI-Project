import { useState } from "react";
import Searchbar from "./Searchbar";
import WeatherCard from "./WeatherCard";
import { fetchWeather } from "../services/weatherService";

function WeatherContainer() {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchWeather(city);
      setWeather(data);

    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </>
  );
}

export default WeatherContainer;