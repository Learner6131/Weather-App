import { useState } from "react";
import InfoBox from "./Info_Box";
import SearchBox from "./Search_Box";

export default function WeatherApp() {
  let [weatherinfo, setWeatherInfo] = useState({
    city: "Delhi",
    description: "Haze",
    feelsLike: 25.0,
    humidity: 69.0,
    temp: 29,
    tempMax: 29,
    tempMin: 25,
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}
