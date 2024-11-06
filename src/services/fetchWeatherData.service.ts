import { SearchParams } from "@/interfaces/search-weather/searchParams.interface";
import { fetchAndFormatWeatherData } from "./fetchAndFormatWeatherData.service";

export const fetchWeatherData = async (query: SearchParams) => {

    try {
        const data  = await fetchAndFormatWeatherData(query)
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};