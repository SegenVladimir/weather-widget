import React, { FC } from 'react';

interface TProps {
    active: boolean;
    icon: string;
    week: string;
    temperature: number;
}

export const DatesWeatherItem: FC<TProps> = ({ active, icon, week, temperature }) => {
    return (
        <div className={`dates-weather__item ` + (active ? 'active' : '')}>
            <div className={`dates-weather__icon ${icon}`}></div>
            <div className="dates-weather__week">{week}</div>
            <div className="dates-weather__temperature">{temperature} °C</div>
        </div>
    );
};
