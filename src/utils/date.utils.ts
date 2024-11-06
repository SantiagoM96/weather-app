import { DateTime } from "luxon";

export const getCurrentDateTime = (timezoneOffset: number) => {
    const localDate = new Date(Date.now() + (timezoneOffset * 1000));
    const hours = localDate.getUTCHours().toString().padStart(2, "0");
    const minutes = localDate.getUTCMinutes().toString().padStart(2, "0");
    const day = localDate.toLocaleDateString('en-US', { weekday: "long" });
    return {
        time: `${hours}:${minutes}`,
        day: day,
    };
};

export const formatToLocalDate = (secs: number, offset: number, format = "cccc") =>
    DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

export const formatToLocalTime = (secs: number, offset: number, format = "hh:mm a") =>
    DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

export const getDate = (daysOffset: number, timezoneOffset: number): string => {
    const refer = new Date(Date.now() + daysOffset * 24 * 60 * 60 * 1000 + timezoneOffset * 1000);

    const year = refer.getUTCFullYear();
    const month = (refer.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = refer.getUTCDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const removeSeconds = (time: string): string => {

    const [timeWithoutSeconds, meridiem] = time.split(' ');
    const [hours, minutes] = timeWithoutSeconds.split(':');

    return `${hours}:${minutes} ${meridiem}`;
};

const parseTimeWithAMPM = (time: string): Date => {
    const [timeString, meridiem] = time.split(' ');
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    const date = new Date(1970, 0, 1);
    date.setHours(meridiem === 'PM' && hours !== 12 ? hours + 12 : hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);

    return date;
};

export const getDiffAndFormatt = (prev: string, current: string): string => {
    const prevHour = parseTimeWithAMPM(prev);
    const currentHour = parseTimeWithAMPM(current);

    const diffInMs = prevHour.getTime() - currentHour.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);

    const minutes = Math.abs(Math.floor(diffInSeconds / 60));
    const seconds = Math.abs(diffInSeconds % 60);

    const sign = diffInSeconds >= 0 ? "+" : "-";

    return `${sign} ${minutes}m ${seconds}s`;
};

