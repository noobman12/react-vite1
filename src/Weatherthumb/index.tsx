import React from "react";
import {
  TiWeatherPartlySunny,
  TiWeatherDownpour,
  TiWeatherCloudy,
  TiWeatherSunny,
} from "react-icons/ti";
type Props = {
  sunAndCloud?: boolean;
  rainy?: boolean;
  cloudy?: boolean;
  sunday?: boolean;
  dayOfWeek?: string;
  eventTime?: string;
};

export default function WeatherThumb({
  sunAndCloud = false,
  rainy = false,
  cloudy = false,
  sunday = false,
  dayOfWeek,
  eventTime,
}: Props) {
  return (
    <>
      <div className='flex flex-col gap-1 justify-center items-center'>
        <span>
          {sunAndCloud && <TiWeatherPartlySunny></TiWeatherPartlySunny>}
          {rainy && <TiWeatherDownpour></TiWeatherDownpour>}
          {cloudy && <TiWeatherCloudy></TiWeatherCloudy>}
          {sunday && <TiWeatherSunny></TiWeatherSunny>}
        </span>
        <span className='font-bold'> {dayOfWeek}</span>
        <span> {eventTime}</span>
      </div>
    </>
  );
}
