import { CurrentWeather } from "@/interfaces/search-weather/currentWeather.interface";
import { ForecastItem } from "@/interfaces/search-weather/forecastItem.interface";
import {
    formatToLocalDate, formatToLocalTime,
    getAirQualityMessage,
    getCurrentDateTime, getDate,
    getDiffAndFormatt, getHumidityMessage,
    getVisibilityMessage, getWindDirection,
    iconUrlFromCode, removeSeconds
} from "@/utils";
import { getSunriseAndSunsetWithDate } from "@/services/sunriseAndSunset.service";

export const formatCurrent = async (data: CurrentWeather) => {
    try {
        const { coord: { lat, lon }, main, name, dt, sys, weather, wind, timezone, visibility } = data;
        const { main: details, icon } = weather[0];
        const formattedLocalTime = getCurrentDateTime(timezone);

        const yesterday = getDate(-1, timezone);
        const today = getDate(0, timezone);
        const dataFromYesterday = await getSunriseAndSunsetWithDate(lat, lon, yesterday);
        const dataFromToday = await getSunriseAndSunsetWithDate(lat, lon, today);

        const visibilityInKM = visibility / 1000

        return {
            temp: Math.trunc(main.temp),
            feels_like: main.feels_like,
            temp_min: Math.trunc(main.temp_min),
            temp_max: Math.trunc(main.temp_max),
            humidity: main.humidity,
            humidityMessage: getHumidityMessage(main.humidity),
            name,
            country: sys.country,
            sunrise: removeSeconds(dataFromToday.sunriseTime),
            sunset: removeSeconds(dataFromToday.sunsetTime),
            speed: wind.speed,
            windDirection: getWindDirection(wind.deg),
            details,
            icon: iconUrlFromCode(icon),
            formattedLocalTime,
            dt,
            timezone,
            lat,
            lon,
            diffBetweenSunrises: getDiffAndFormatt(dataFromYesterday.sunriseTime, dataFromToday.sunriseTime),
            diffBetweenSunsets: getDiffAndFormatt(dataFromYesterday.sunsetTime, dataFromToday.sunsetTime),
            visibility: visibilityInKM,
            visibilityMessage: getVisibilityMessage(visibilityInKM),
        };
    } catch (error) {
        console.error(error);
        throw error
    }

};

export const formatForecastWeather = (secs: number, offset: number, data: ForecastItem[]) => {
    const hourly = data
        .filter(f => f.dt > secs)
        .map((f, index) => ({
            temp: Math.trunc(f.main.temp),
            dayAndTime: formatToLocalTime(f.dt, offset),
            icon: iconUrlFromCode(f.weather[0].icon),
            pop: index === 0 ? f.pop : undefined,
        }))
        .slice(0, 5);

    const daily = data
        .filter(f => f.dt_txt.slice(-8) === "12:00:00")
        .map(f => ({
            temp: Math.trunc(f.main.temp),
            dayAndTime: formatToLocalDate(f.dt, offset),
            icon: iconUrlFromCode(f.weather[0].icon),
        }))
        .slice(0, 5);

    return { hourly, daily };
};

export const formatAQI = (aqiValue: number) => {
    const aqiMessage: string = getAirQualityMessage(aqiValue)
    return {
        aqi: aqiValue,
        aqiMessage
    }
}