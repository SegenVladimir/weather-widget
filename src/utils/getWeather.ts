import { dateHour, getDate } from './getDate';
import { TDate } from '../types/types';

const url = `https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,cloudcover,precipitation,relativehumidity_2m,windspeed_10m&timeformat=unixtime&windspeed_unit=ms&language=ru`;

export interface TDataWeatherApi {
    elevation: number;
    generationtime_ms: number;
    hourly: {
        time: number[];
        temperature_2m: number[];
        precipitation: number[];
        relativehumidity_2m: number[];
        windspeed_10m: number[];
        cloudcover: number[];
    };
    hourly_units: {
        cloudcover: string;
        precipitation: string;
        relativehumidity_2m: string;
        temperature_2m: string;
        time: string;
        windspeed_10m: string;
    };
}

export interface TWeekDataWeather {
    time: number;
    temperature: number;
    cloud: number;
    date: TDate;
}

export interface TDataWeather {
    time: number;
    temperature: number;
    cloud: number;
    precipitation: number;
    humidity: number;
    windspeed: number;
    weekData: TWeekDataWeather[];
    units: {
        cloud: string;
        temperature: string;
        time: string;
        precipitation: string;
        humidity: string;
        windspeed: string;
    };
}

const getWeekData = (response: TDataWeatherApi): TWeekDataWeather[] => {
    const WeekData = [];
    for (let i = 1; i < 7; i++) {
        const date = dateHour().date;
        date.setDate(date.getDate() + i);

        const weekIndex = response.hourly.time.findIndex((time) => time === dateHour(date).time);

        WeekData.push({
            index: date.getTime(),
            time: date.getTime(),
            temperature: response.hourly.temperature_2m[weekIndex],
            cloud: response.hourly.cloudcover[weekIndex],
            date: getDate(date),
        });
    }
    return WeekData;
};

export const getWeather = (latitude: number, longitude: number): Promise<TDataWeather> => {
    return fetch(url + `&latitude=${latitude}&longitude=${longitude}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json() as Promise<TDataWeatherApi>;
        })
        .then((response): TDataWeather => {
            const currentTime = dateHour().time;
            const index = response.hourly.time.findIndex((time) => time === currentTime);

            return {
                time: response.hourly.time[index],
                temperature: response.hourly.temperature_2m[index],
                cloud: response.hourly.cloudcover[index],
                precipitation: response.hourly.precipitation[index],
                humidity: response.hourly.relativehumidity_2m[index],
                windspeed: response.hourly.windspeed_10m[index],
                weekData: getWeekData(response),
                units: {
                    cloud: response.hourly_units.cloudcover,
                    temperature: response.hourly_units.temperature_2m,
                    time: response.hourly_units.time,
                    precipitation: response.hourly_units.precipitation,
                    humidity: response.hourly_units.relativehumidity_2m,
                    windspeed: response.hourly_units.windspeed_10m,
                },
            };
        });
};
