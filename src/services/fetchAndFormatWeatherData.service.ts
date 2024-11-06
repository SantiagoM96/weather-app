import { formatAQI, formatCurrent, formatForecastWeather } from "@/formatters/weather.formatter";
import { SearchParams } from "@/interfaces/search-weather/searchParams.interface";

const API_KEY: string | undefined = import.meta.env.VITE_API_KEY;
const BASE_URL: string | undefined = import.meta.env.VITE_BASE_URL;

if (!API_KEY || !BASE_URL) {
    throw new Error("Las variables de entorno API_KEY o BASE_URL no están definidas.");
}

const getWeatherData = async (infoType: string, searchParams: SearchParams) => {

    const url = new URL(`${BASE_URL}${infoType}`);

    const params = {
        ...searchParams,
        lat: searchParams?.lat?.toString() || "",
        lon: searchParams?.lon?.toString() || "",
        appid: API_KEY
    }

    url.search = new URLSearchParams(params).toString();

    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json()

        if (!data) {
            throw new Error("No weather data in getWeatherData");
        }

        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export const fetchAndFormatWeatherData = async (searchParams: SearchParams) => {

    try {
        const formattedCurrentWeather = await getWeatherData("weather", searchParams)
            .then(data => formatCurrent(data))
            .catch(error => {
                console.error("Error:", error);
            })

        if (!formattedCurrentWeather) {
            throw new Error("NO_CURRENT_WEATHER_DATA");
        }

        const { dt, lat, lon, timezone } = formattedCurrentWeather;

        const formattedForecastWeather = await getWeatherData("forecast", {
            lat,
            lon,
            units: searchParams.units,
        }).then((d) => formatForecastWeather(dt, timezone, d.list)).catch(error => {
            console.log("Error:", error)
        });

        if (!formattedForecastWeather) {
            throw new Error("NO_FORECAST_WEATHER_DATA");
        }

        const formattedAQIData = await getWeatherData("air_pollution", {
            lat,
            lon,
            units: searchParams.units,
        }).then(data => formatAQI(data.list[0].main.aqi)).catch(error => {
            console.log("Error:", error);
        });

        if (!formattedAQIData) {
            throw new Error("NO_AQI_DATA");
        }

        const uvData = await getWeatherData("uvi", {
            lat, lon,
            units: searchParams.units,
        }).then(data => Math.trunc(data.value)).catch(error =>
            console.log("Error: ", error))

        if (!uvData) {
            throw new Error("NO_UV_DATA");
        }

        return { ...formattedCurrentWeather, ...formattedForecastWeather, ...formattedAQIData, uvIndex: uvData };
    } catch (error) {
        console.error(error)
        throw error
    }
};