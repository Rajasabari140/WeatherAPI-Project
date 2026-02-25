const API_KEY ="31468afa2f527d553f9916608a36014b";

export const fetchWeather = async (city) => {
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.cod === "404") {
    throw new Error("City not found");
  }
  return data;
};
