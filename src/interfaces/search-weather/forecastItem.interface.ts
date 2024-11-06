import { Weather } from "./weather.interface";

export interface ForecastItem {
    dt: number;
    main: {
        temp: number;
    };
    weather: Weather[];
    dt_txt: string;
    pop?: string;
}