import { WeatherRequest } from "../interface";

export const fetchWeather = async (location: string) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`;
  try {
    console.log("Making request....");
    const response = await fetch(url);
    const data: WeatherRequest = await response.json();
    return data;
  } catch (error) {
    console.log("Error in fetchWeather request - ", error);
  }
};
