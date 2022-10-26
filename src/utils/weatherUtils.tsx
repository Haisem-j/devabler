import {
  WiSnow,
  WiRain,
  WiFog,
  WiDayWindy,
  WiCloud,
  WiDayCloudy,
  WiNightPartlyCloudy,
  WiDaySunny,
  WiMoonNew,
} from "react-icons/wi";
export const DetermineIcon = ({
  icon,
  iconType,
}: {
  icon: string;
  iconType: string;
}) => {
  switch (icon) {
    case "snow":
      return <WiSnow className={iconType} />;
    case "rain":
      return <WiRain className={iconType} />;
    case "fog":
      return <WiFog className={iconType} />;
    case "wind":
      return <WiDayWindy className={iconType} />;
    case "cloudy":
      return <WiCloud className={iconType} />;
    case "partly-cloudy-day":
      return <WiDayCloudy className={iconType} />;
    case "partly-cloudy-night":
      return <WiNightPartlyCloudy className={iconType} />;
    case "clear-day":
      return <WiDaySunny className={iconType} />;
    case "clear-night":
      return <WiMoonNew className={iconType} />;
    default:
      return <WiDaySunny className={iconType} />;
  }
};
