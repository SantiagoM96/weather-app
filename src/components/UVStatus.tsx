import { UVStatusProps } from "@/interfaces/show-weather/uvStatusProps.interface";
import DoughnutChart from "./Chart";

const UVStatus = ({ uvIndex }: UVStatusProps) => {
    return (
        <div className="card-status">
            <h3>UV Index</h3>
            <DoughnutChart uvIndex={uvIndex}/>
        </div>
    )
}

export default UVStatus