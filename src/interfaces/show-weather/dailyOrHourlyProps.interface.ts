import { WeatherHourlyDailyItem } from "@/interfaces/search-weather/weatherHourlyDailyItem.interface"

export interface DailyOrHourlyProps {
    daily?: WeatherHourlyDailyItem[]
    hourly?: WeatherHourlyDailyItem[]
}
