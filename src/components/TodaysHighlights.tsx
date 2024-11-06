import AQIStatus from "./AQIStatus"
import HumidityStatus from "./HumidityStatus"
import SunriseAndSunsetStatus from "./SunriseAndSunsetStatus"
import UVStatus from "./UVStatus"
import VisibilityStatus from "./VisibilityStatus"
import WindStatus from "./WindStatus"
import { TodaysHighlightsProps } from "@/interfaces/show-weather/todayHighliths.interface"

const TodaysHighlights = ({ todayHighlights, units }: TodaysHighlightsProps) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-lg">Today&apos;s Highlights</h2>
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    <WindStatus speed={todayHighlights.speed} direction={todayHighlights.windDirection} units={units} />
                    <AQIStatus aqi={todayHighlights.aqi} aqiState={todayHighlights.aqiMessage} />
                    <UVStatus uvIndex={todayHighlights.uvIndex} />
                    <SunriseAndSunsetStatus sunrise={todayHighlights.sunrise} diffBetweenSunrises={todayHighlights.diffBetweenSunrises} sunset={todayHighlights.sunset} diffBetweenSunsets={todayHighlights.diffBetweenSunsets} />
                    <VisibilityStatus visibility={todayHighlights.visibility} message={todayHighlights.visibilityMessage} />
                    <HumidityStatus humidity={todayHighlights.humidity} message={todayHighlights.humidityMessage} />
                </div>
            </div>
        </>
    )
}

export default TodaysHighlights