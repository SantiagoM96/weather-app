import { WeatherOptions } from "@/interfaces/search-weather/weatherOptions.interface";

export const visibilityOptions: WeatherOptions[] = [
    { min: 0, max: 1, message: "Bad" },
    { min: 1, max: 5, message: "Normal" },
    { min: 5, max: 10, message: "Good" },
    { min: 10, max: Infinity, message: "Very Good" },
]
