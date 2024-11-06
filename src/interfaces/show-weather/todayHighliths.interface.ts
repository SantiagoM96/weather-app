import { Units } from "@/types/units.type";
import { WeatherReport } from "../search-weather/weatherReport.interface";

export interface TodaysHighlightsProps {
    todayHighlights: WeatherReport;
    units: Units;
}
