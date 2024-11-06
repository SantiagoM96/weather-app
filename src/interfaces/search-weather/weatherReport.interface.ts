import { WeatherHourlyDailyItem } from "./weatherHourlyDailyItem.interface";
import { WeatherTime } from "./weatherTime.interface";

export interface WeatherReport {
  name: string;
  country: string;
  details: string;
  dt: number;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  humidityMessage: string;
  sunrise: string;
  sunset: string;
  speed: number;
  icon: string;
  formattedLocalTime: WeatherTime;
  timezone: number;
  lat: string;
  lon: string;
  hourly: WeatherHourlyDailyItem[];
  daily: WeatherHourlyDailyItem[];
  diffBetweenSunrises: string;
  diffBetweenSunsets: string;
  aqi: number;
  aqiMessage: string;
  uvIndex: number;
  windDirection: string;
  visibility: number;
  visibilityMessage: string;
}
