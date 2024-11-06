import { airQualityOptions, windOptions, humidityOptions, visibilityOptions } from "@/constants";

export const getWindDirection = (deg: number) => {
    const direction = windOptions.find(d => deg > d.min && deg <= d.max);
    return direction ? direction.message : "Unknown";
}

export const getAirQualityMessage = (aqi: number) => {
    return airQualityOptions[aqi] ?? "Unknown"
}

export const getVisibilityMessage = (visibility: number) => {
    const visibilityMessage = visibilityOptions.find(r => visibility > r.min && visibility <= r.max)
    return visibilityMessage ? visibilityMessage.message : "Unknown"
}

export const getHumidityMessage = (humidity: number) => {
    const humidityM = humidityOptions.find(h => humidity > h.min && humidity <= h.max);
    return humidityM ? humidityM.message : "Unknown";
}

export const iconUrlFromCode = (icon: string) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

export const getUserLocation = (callback: (lat: string, lon: string) => void, fallback?: () => void) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                callback(latitude.toString(), longitude.toString());
            },
            () => {
                if (fallback) fallback();
            }
        );
    } else if (fallback) {
        fallback();
    }
};
