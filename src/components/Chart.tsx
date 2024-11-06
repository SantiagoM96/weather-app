import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Legend, Tooltip, ArcElement } from "chart.js";
import { UVStatusProps } from "@/interfaces/show-weather/uvStatusProps.interface";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ uvIndex }: UVStatusProps) => {
    const uvValue = uvIndex > 12 ? 12 : uvIndex
    const a = Math.trunc((100 * uvValue) / 12)
    const b = 100 - a

    const dataPrimary = {
        datasets: [
            {
                data: [a, b],
                borderWidth: 0,
                backgroundColor: [`${uvValue === 12 ? "red" : "#FFBE62"}`, "transparent"],
                circumference: 180,
                rotation: 270,
                cutout: "75%",
            },
        ],
    };

    const dataSecondary = {
        datasets: [
            {
                data: [100],
                borderWidth: 0,
                backgroundColor: ["#F3F3F5"],
                circumference: 180,
                rotation: 270,
                cutout: "75%",
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false
            }
        }
    };

    return (
        <div className="relative w-[160px] h-[100px] mx-auto">

            <Doughnut data={dataSecondary} options={options} />

            <Doughnut
                data={dataPrimary}
                options={options}
                className="absolute top-0 left-0"
            />

            <span className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-[42px]">
                {`${uvIndex > 12 ? "+12" : uvIndex}`}
            </span>

            <span className="absolute bottom-[1%] left-[-13%] font-medium text-sm text-gray-500">0</span>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-medium text-sm text-gray-500">6</span>
            <span className="absolute bottom-[1%] right-[-16%] font-medium text-sm text-gray-500">12</span>
        </div>
    );
};

export default DoughnutChart;
