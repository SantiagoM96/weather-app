import { WindStatusProps } from "@/interfaces/show-weather/windStatusProps.interface";

const WindStatus = ({ speed, direction, units }: WindStatusProps) => {
    
    const windSpeed = units === "metric" ? speed * 3.6 : speed;

    return (
        <div className="card-status gap-0">
            <h3>Wind Status</h3>
            <div className="flex justify-center flex-col gap-4 h-full">
                <p className="font-medium text-5xl">{Math.trunc(windSpeed)} <span className="text-base">{units === "imperial" ? "mph" : "km/h"}</span> </p>
                <span className="font-medium">{direction}</span>
            </div>
        </div>
    )
}

export default WindStatus