import { TDate } from './date';

export type WeatherStatus = 'sunny' | 'rain' | 'cloudy' | 'showers';

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
        rain: number[];
        showers: number[];
    };
    hourly_units: {
        cloudcover: string;
        precipitation: string;
        relativehumidity_2m: string;
        temperature_2m: string;
        time: string;
        windspeed_10m: string;
        rain: string;
        showers: string;
    };
}

export interface TWeekDataWeather {
    time: number;
    temperature: number;
    status: WeatherStatus;
    date: TDate;
}

export interface TDataWeather {
    time: number;
    temperature: number;
    status: WeatherStatus;
    precipitation: number;
    humidity: number;
    windspeed: number;
    weekData: TWeekDataWeather[];
    units: {
        temperature: string;
        time: string;
        precipitation: string;
        humidity: string;
        windspeed: string;
    };
}
