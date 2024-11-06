
export const getSunriseAndSunsetWithDate =
    async (lat: string, lon: string, date: string) => {
        const response = await fetch(
            `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=${date}`
        );
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return {
            sunriseTime: data.results.sunrise,
            sunsetTime: data.results.sunset
        };
    }