import { SunriseAndSunsetStatusProps } from "@/interfaces/show-weather/sunriseAndSunsetStatusProps.interface"
import DownEllipse from "@/ui/icons/DownEllipse"
import UpEllipse from "@/ui/icons/UpEllipse"

const SunriseAndSunsetStatus = (
    { sunrise, diffBetweenSunrises, sunset, diffBetweenSunsets }
        : SunriseAndSunsetStatusProps) => {
    return (
        <div className="card-status">
            <h3 className="text-[#aaa7a7] font-medium">Sunrise & Sunset</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <UpEllipse width={40} height={40} className="grados" />
                    <div className="flex flex-col">
                        <span className="font-medium">{sunrise}</span>
                        <span className="text-sm text-[#aaa7a7]">{diffBetweenSunrises}</span>
                    </div>

                </div>
                <div className="flex gap-4 items-center">
                    <DownEllipse width={40} height={40} />
                    <div className="flex flex-col">
                        <span className="font-medium">{sunset}</span>
                        <span className="text-sm text-[#aaa7a7]">{diffBetweenSunsets}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SunriseAndSunsetStatus