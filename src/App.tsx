import { useState, useEffect } from "react";
import { getUserLocation } from "@/utils";
import { Query } from "@/interfaces/search-weather/query.interface";
import { WeatherReport } from "@/interfaces/search-weather/weatherReport.interface";
import { Units } from "@/types/units.type";
import { HourlyOrDaily } from "@/types/hourlyOrDaily.type";
import { fetchWeatherData } from "@/services/fetchWeatherData.service"
import DailyOrHourly from "@/components/DailyOrHourly";
import TodaysHighlights from "@/components/TodaysHighlights";
import BasicWeatherData from "@/components/BasicWeatherData";
import WeatherButtons from "@/components/WeatherButtons";
import Loader from "@/components/Loader";

export default function App() {
  const [units, setUnits] = useState<Units>("metric");
  const [query, setQuery] = useState<Query | null>(null);
  const [weather, setWeather] = useState<WeatherReport | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hourlyOrDaily, setHourlyOrDaily] = useState<HourlyOrDaily>("daily");

  useEffect(() => {
    const initializeWeatherData = () => {
      getUserLocation(
        (lat, lon) => setQuery({ lat, lon }),
        () => setQuery({ city: "Buenos Aires" })
      );
    };
    initializeWeatherData();
  }, []);

  useEffect(() => {
    if (!query) return;
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchWeatherData({ ...query, units });
        console.log(data)
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [query, units]);

  return (
    <main className="grid place-items-center lg:grid-cols-4 w-full max-w-[1200px] h-full">
      {loading ? (
        <div className="absolute top-0 left-0 w-full h-full bg-white">
          <Loader />
        </div>
      ) : (
        weather && (
          <>
            <section
              className="md:col-span-1 flex flex-col items-center lg:justify-between 
            gap-6 w-full h-full bg-white p-8 lg:rounded-t-2xl lg:rounded-tl-2xl 
            lg:rounded-tr-none lg:rounded-bl-2xl">
              <BasicWeatherData basicData={weather} setQuery={setQuery} />
            </section>

            <section className="flex flex-col gap-6 p-8 lg:col-span-3 w-full h-full 
            lg:rounded-br-2xl lg:rounded-tr-2xl bg-[#f6f6f8]">
              <div className="flex flex-col gap-4">
                <WeatherButtons units={units} setUnits={setUnits} hourlyOrDaily={hourlyOrDaily} setHourlyOrDaily={setHourlyOrDaily} />
                {hourlyOrDaily === "daily" ? <DailyOrHourly daily={weather.daily} /> : <DailyOrHourly hourly={weather.hourly} />}
              </div>

              <TodaysHighlights todayHighlights={weather} units={units} />
            </section>
          </>
        )
      )}
    </main>
  );
}
