import { HourlyOrDaily } from "@/types/hourlyOrDaily.type";
import { Units } from "@/types/units.type";

export interface WeatherButtonsProps {
    units: Units;
    setUnits: React.Dispatch<React.SetStateAction<Units>>;
    hourlyOrDaily: HourlyOrDaily;
    setHourlyOrDaily: React.Dispatch<React.SetStateAction<HourlyOrDaily>>;
}
