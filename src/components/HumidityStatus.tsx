import { HumidityStatusProps } from "@/interfaces/show-weather/humidityStatusProps.interface"

const HumidityStatus = ({ humidity, message }: HumidityStatusProps) => {
    return (
        <div className="card-status">
            <h3>Humidity</h3>
            <div className="flex justify-center flex-col gap-4 h-full">
                <p className="font-medium text-5xl relative">{humidity}
                    <span className="absolute top-[2px] left-18 text-lg">%</span>
                </p>
                <span className="font-medium">{message}</span>
            </div>
        </div>
    )
}

export default HumidityStatus