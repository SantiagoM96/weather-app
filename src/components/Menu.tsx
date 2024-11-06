import Cloud from "@/ui/icons/Cloud"
import Rain from "@/ui/icons/Rain"
import { MenuProps } from "@/interfaces/show-weather/menuProps.interface"

const Menu = (
    { day, hour, details, temp, temp_max, temp_min, pop, city, country, icon }: MenuProps) => {
    return (
        <>
            <h1 className="font-medium text-2xl">{city}, {country}</h1>

            <img
                src={icon}
                alt={details}
                width={100}
                height={100}
            />

            <span className="text-7xl">{temp}°</span>

            <div className="flex gap-4">
                <span className="text-sm font-medium text-red-500">Max: {temp_max}°</span>
                <span className="text-sm font-medium text-blue-500">Min: {temp_min}°</span>
            </div>

            <p className="text-xl">{day}, <span className="text-gray">{hour}</span></p>
            <span className="border-b border-[#d1d1d1] w-full" />
            <div className="flex gap-4 font-medium text-sm">
                <div className="flex items-center gap-2">
                    <Cloud className="text-foreground flex-shrink-0 w-6 h-6" />
                    <span className="capitalize">{details}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Rain className="text-[#6167AD] flex-shrink-0 w-6 h-6" fill="#6167AD" />
                    <span>Rain - {pop}%</span>
                </div>
            </div>
        </>
    )
}

export default Menu