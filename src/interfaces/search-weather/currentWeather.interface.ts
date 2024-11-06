import { Coord } from "./coord.interface";
import { Main } from "./main.interface";
import { Sys } from "./sys.interface";
import { Weather } from "./weather.interface";
import { Wind } from "./wind.interface";

export interface CurrentWeather {
    coord: Coord;
    main: Main;
    name: string;
    country: string;
    dt: number;
    weather: Weather[];
    wind: Wind;
    sys: Sys;
    timezone: number;
    visibility: number;
}