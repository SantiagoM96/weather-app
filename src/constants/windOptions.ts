import { WeatherOptions } from "@/interfaces/search-weather/weatherOptions.interface";

export const windOptions: WeatherOptions[] = [
    { min: 0, max: 11.25, message: "N" },
    { min: 11.25, max: 33.75, message: "NNE" },
    { min: 33.75, max: 56.25, message: "NE" },
    { min: 56.25, max: 78.75, message: "ENE" },
    { min: 78.75, max: 101.25, message: "E" },
    { min: 101.25, max: 123.75, message: "ESE" },
    { min: 123.75, max: 146.25, message: "SE" },
    { min: 146.25, max: 168.75, message: "SSE" },
    { min: 168.75, max: 191.25, message: "S" },
    { min: 191.25, max: 213.75, message: "SSW" },
    { min: 213.75, max: 236.25, message: "SW" },
    { min: 236.25, max: 258.75, message: "WSW" },
    { min: 258.75, max: 281.25, message: "W" },
    { min: 281.25, max: 303.75, message: "WNW" },
    { min: 303.75, max: 326.25, message: "NW" },
    { min: 326.25, max: 348.75, message: "NNW" },
    { min: 348.75, max: 360, message: "N" }
];