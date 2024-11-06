import { WeatherReport } from "../search-weather/weatherReport.interface";
import { SearchBarProps } from "./searchBarProps.interface";

export interface BasicWeatherDataProps extends SearchBarProps {
    basicData: WeatherReport;
}