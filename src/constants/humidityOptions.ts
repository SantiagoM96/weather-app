import { WeatherOptions } from "@/interfaces/search-weather/weatherOptions.interface";

export const humidityOptions: WeatherOptions[] = [
    { min: 0, max: 30, message: "Very Low" },
    { min: 30, max: 50, message: "Low" },
    { min: 50, max: 70, message: "Moderate" },
    { min: 70, max: 90, message: "High" },
    { min: 90, max: 100, message: "Very High" }
];