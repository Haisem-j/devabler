import React from "react";
import Forcast from "./components/Forcast";
import { WeatherRequest, ForcastDay } from "./interface";
import { fetchWeather } from "./requests";
import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
} from "./utils/storage";

const availbleCities = ["Ottawa", "Moscow", "Tokyo"] as const;
function App() {
  const [selectedCity, setSelectedCity] = React.useState<
    "Ottawa" | "Moscow" | "Tokyo"
  >("Ottawa");
  const [weatherForcast, setWeatherForcast] = React.useState<
    ForcastDay[] | null
  >(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);

    // Check for cached data
    const cachedWeather: WeatherRequest =
      getValueFromLocalStorage(selectedCity);

    // Fetch & set weather data
    if (!cachedWeather) {
      fetchWeather(selectedCity).then((data) => {
        if (data?.days) {
          setWeatherForcast([...data?.days.slice(0, 5)]);
          // Cache response
          setValueToLocalStorage(selectedCity, data);
        }
        setIsLoading(false);
      });
    } else {
      //Cache data to prevent constant api calls
      setWeatherForcast([...cachedWeather.days.slice(0, 5)]);
      setIsLoading(false);
    }
  }, [selectedCity]);

  return (
    <div className="App">
      <div className="container">
        <div className="cities">
          {availbleCities.map((city) => (
            <h1
              className={`${selectedCity === city ? "selected" : ""}`}
              key={city}
              onClick={() => setSelectedCity(city)}
            >
              {city.toLocaleUpperCase()}
            </h1>
          ))}
        </div>
        <Forcast
          weatherForcast={weatherForcast}
          city={selectedCity}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
