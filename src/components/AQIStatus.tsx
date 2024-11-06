import { AQIStatusProps } from "@/interfaces/show-weather/aqiStatusProps.interface"

const AQIStatus = ({ aqi, aqiState }: AQIStatusProps) => {
    return (
        <div className="card-status">
            <h3>Air Quality</h3>
            <div className="flex justify-center flex-col gap-4 h-full">
                <p className="font-medium text-5xl">{aqi}</p>
                <span className="text-lg font-medium">{aqiState}</span>
            </div>
        </div>
    )
}

export default AQIStatus