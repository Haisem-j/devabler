import moment from "moment";

import { ForcastDay } from "../../interface";
import { DetermineIcon } from "../../utils/weatherUtils";
import Loading from "../Loading";
interface ForcastInterface {
  weatherForcast: ForcastDay[] | null;
  city: string;
  isLoading: boolean;
}
const Forcast = ({ weatherForcast, city, isLoading }: ForcastInterface) => {
  return !isLoading && weatherForcast ? (
    <div className="forcast">
      <div className="todaysWeather">
        <h4>Today</h4>
        <div className="currentWeather">
          <DetermineIcon
            icon={weatherForcast[0].icon}
            iconType={"icon-current"}
          />
          <div className="desc">
            <h1>{weatherForcast[0].temp}°</h1>
            <span>{weatherForcast[0].conditions}</span>
          </div>
        </div>
      </div>
      <div className="forcastedWeather">
        {weatherForcast.map((day, i) => {
          if (i > 0) {
            const shortDate = moment
              .unix(day.datetimeEpoch)
              .format("dddd")
              .slice(0, 3);
            return (
              <div className="fWeather" key={`${city} - ${shortDate}`}>
                <h4>{shortDate}</h4>
                <DetermineIcon icon={day.icon} iconType={"icon-forcast"} />
                <span>{day.temp}°</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  ) : (
    <div className="forcastLoading">
      <Loading />
    </div>
  );
};
export default Forcast;
