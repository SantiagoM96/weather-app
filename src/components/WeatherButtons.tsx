import { WeatherButtonsProps } from "@/interfaces/show-weather/weatherButtonsProps.interface"

const WeatherButtons = ({ units, setUnits, hourlyOrDaily, setHourlyOrDaily }: WeatherButtonsProps) => {
    return (
        <div className="flex items-center justify-between w-full mb-2">
            <div className="flex gap-4 text-lg">
                <button className={hourlyOrDaily === "hourly" ? "button-active" : "button-inactive"} onClick={() => setHourlyOrDaily("hourly")}>Today</button>
                <button className={hourlyOrDaily === "daily" ? "button-active" : "button-inactive"} onClick={() => setHourlyOrDaily("daily")}>Daily</button>
            </div>
            <div className="flex gap-4 text-lg">
                <button className={units === "metric" ? "button-active-units" : "button-inactive-units"} onClick={() => setUnits("metric")}>C °</button>
                <button className={units === "imperial" ? "button-active-units" : "button-inactive-units"} onClick={() => setUnits("imperial")}>F °</button>
            </div>
        </div>
    )
}

export default WeatherButtons
